import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LanguageModel} from '../model/languages.model';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class PrincipalService {
  private languages: LanguageModel[];
  private defaultLanguage: LanguageModel;
  private language: LanguageModel;

  constructor(
    private translate: TranslateService
  ) {

    this.languages = [
      {name: 'Português', code: 'pt-BR', translate: 'languages.pt'},
      {name: 'English', code: 'en-US', translate: 'languages.en'}
    ];

    this.defaultLanguage = this.languages[0];
  }

  setLanguageCode(code: string): LanguageModel {
    this.language = this.languages.find((l: LanguageModel) => l.code === code);
    if (!this.language) {
      this.language = this.getDefaultLanguage();
    }
    return this.language;
  }

  setLanguage(languageCode: string) {
    this.translate.use(languageCode);
  }

  getLanguage(): LanguageModel {
    return this.language;
  }

  getLanguages(): LanguageModel[] {
    return this.languages;
  }

  getDefaultLanguage(): LanguageModel {
    return this.defaultLanguage;
  }

  getLanguageMatcher(): any {
    return /pt/;
  }
}
