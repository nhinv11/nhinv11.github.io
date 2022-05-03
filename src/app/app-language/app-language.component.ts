import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LanguagesService } from "../languages.service";

@Component({
  selector: 'app-language',
  templateUrl: './app-language.component.html',
  styleUrls: ['./app-language.component.css'],
  providers: [LanguagesService]
})
export class AppLanguageComponent implements OnInit {
  @Output() appLanguage =  new EventEmitter<string>();
  @Output() appLangVersion =  new EventEmitter<string>();
  @Output() javaFormat = new EventEmitter<string>();
  @Output() withJSP = new EventEmitter<string>();

  languages: any = []
  
  selectedLanguage: string = ''
  langVersion: any = ''
  javaInfo: any
  
  // dotnetHelper: string = this.lservice.getDotNetHelper()
  // dotnetCompileHelper: string = this.lservice.getDotNetCompile()

  // jsHelper: string = this.lservice.getJSHelper()
  // jsCompileHelper: string = this.lservice.getJSCompile()

  updateLanguage(e: any){
    this.selectedLanguage = e.target.value
    this.appLanguage.emit(e.target.value)
    this.getVersionsList(this.selectedLanguage)
  }

  updateLangVersion(e: any){
    this.appLangVersion.emit(e.target.value)
  }

  getVersionsList(language: any){
    let index = this.languages.languages.findIndex(x => x.name === language);
    this.langVersion = this.languages.languages[index].versions
  }

  getJSP(e: any){
    this.withJSP.emit(e.target.value)
  }

  getJavaFormat(e: any){
    this.javaFormat.emit(e.target.value)
  }

  constructor(private lservice: LanguagesService) { }

  ngOnInit() {
    this.lservice.getlanguages()
      .subscribe(data => {
          this.languages = data;
        }
      )
    this.lservice.getJavaInfo()
      .subscribe(data => this.javaInfo = data)
  }

  ngOnChanges() {

  }

}
