import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { GamesService } from 'src/app/_services/games.service';
import { Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-modify-game-list',
  templateUrl: './modify-game-list.component.html',
  styleUrls: ['./modify-game-list.component.css']
})

// when this component in instantiated from the edit button we will use .setValue method to grab the game object data and input it in there to make it easier to edit the list item

export class ModifyGameListComponent implements OnInit, OnDestroy {
  
  constructor(private formBuilder: FormBuilder,
              private gameService: GamesService){}

  private destroy$ = new Subject(); //used for unsubscribing from observables in ng OnDestroy
  private testSub!: Subscription;
  ngOnInit(): void {
    this.testSub = this.gameService.editingGame.subscribe(
      (game) => {
        this.gameForm.patchValue(game);
        this.featureDescriptions.clear();
        this.featureImages.clear();
        for(let x = 0; x < game.featureDescriptions.length; x++){
          this.featureDescriptions.push(this.formBuilder.control(game.featureDescriptions[x]));
          this.featureImages.push(this.formBuilder.control(game.featureImages[x]));
        }
    }).add();
  }
  
  
  gameForm = this.formBuilder.group({
    id: [],
    title: ['', Validators.required],
    author: ['', Validators.required],
    description: ['', Validators.required],
    featureDescriptions: this.formBuilder.array([['', [Validators.required, Validators.minLength(1)]]],[ Validators.required, Validators.minLength(1)]),
    featureImages: this.formBuilder.array([['', [ Validators.required, Validators.minLength(1)]]],[ Validators.required, Validators.minLength(1)]),
    genre: ['', Validators.required],
    version: ['', Validators.required],
    rating: [''], //this will be calculated
    publishDate: this.formBuilder.group({
      month: ['', Validators.required],
      day: ['', [Validators.required, Validators.max(32)]],
      year: ['', [Validators.required, Validators.max(2021)]],
    }),
    videoSrc: ['',Validators.required],
    imgSrc: ['',Validators.required]
  })
  
  //instantiating form array class properties
  get featureDescriptions(){
    return this.gameForm.get('featureDescriptions') as FormArray;
  }
  get featureImages(){
    return this.gameForm.get('featureImages') as FormArray;
  }
  
  onModalClose(){
    console.log('modal closed');
    this.gameService.isEditing = false;
  }
  
  addFeature(){
    this.featureImages.push(this.formBuilder.control('',[Validators.required, Validators.minLength(1)]));
    this.featureDescriptions.push(this.formBuilder.control('',[Validators.required, Validators.minLength(1)]));
    this.featureImages.updateValueAndValidity();
    this.featureDescriptions.updateValueAndValidity();
    console.log(this.featureImages);
  }

  removeFeature(index:number){
    this.featureImages.removeAt(index);
    this.featureDescriptions.removeAt(index);
  }
  
  onSubmit(){
    console.warn(this.gameForm.value);
    if(this.gameService.isEditing){
      this.gameService.submitEditedGame(this.gameForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        ()=>{
        this.gameService.getGames().subscribe((games)=>{
          this.gameService.gameListModified.next(games);
        })},
        (err) => {console.log(err)},
        () => {console.log('http request completed')}
      );
    }
    else{
      this.gameService.createGame(this.gameForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(()=>{
        this.gameService.getGames()
        .pipe(takeUntil(this.destroy$))
        .subscribe((games)=>{
          this.gameService.gameListModified.next(games);
        })
      });
    }
  }
  
  onClearForm(){
    this.gameForm.reset();
    this.featureDescriptions.clear();
    this.featureImages.clear();
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
    console.log('The test sub', this.testSub);
  }
}
  