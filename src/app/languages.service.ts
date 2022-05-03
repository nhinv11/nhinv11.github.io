import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  appLanguages: any

  javaHelper: string = "Upload JAR, WAR, or EAR files with debug symbols."
  javaCompile: string = "javac -g sample.java"
  
  dotnetHelper: string = "Applications must be packaged as EXE, DLL, NUPKG, or ZIP files."
  dotnetCompile: string = "dotnet publish -c Debug -p:PublishProfile=FolderProfile"

  jsHelper: string = "Upload a ZIP file containing JavaScript source code, or files that contain JavaScript"
  jsCompile: string = ""


  getDotNetHelper(): string{
    return this.dotnetHelper
  }

  getDotNetCompile(): string{
    return this.dotnetCompile
  }

  getJSHelper(): string{
    return this.jsHelper
  }

  getJSCompile(): string{
    return this.jsCompile
  }

  constructor(private httpService: HttpClient) { 
  }

  // getlanguages(): Observable<string[]> {
  //   this.httpService.get('../../assets/test.json').subscribe(
  //     data => {
  //       this.appLanguages = data as string[];
  //     }
  //   );
  //   return this.appLanguages;
  // }
  getlanguages() {
    return this.httpService.get('../../assets/languages.json')
  }

  getJavaInfo() {
    return this.httpService.get('../../assets/javaInfo.json')
  }

}
