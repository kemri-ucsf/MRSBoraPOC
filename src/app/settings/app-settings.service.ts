import { Injectable } from '@angular/core';
import { LocalStorageService } from '../utils/local-storage.service';

@Injectable()
export class AppSettingsService {
  // OpenMRS Server
  public static readonly DEFAULT_OPENMRS_SERVER_URL = 'http://localhost:8080/openmrs/';
  public static readonly OPENMRS_SERVER_KEY = 'appSettings.openmrsServer';
  public static readonly OPENMRS_LIST_STORAGE_KEY = '#';
  private static readonly OPENMRS_REST_SUFFIX = 'ws/rest/v1/';

  // ETL Server
  public static readonly DEFAULT_ETL_SERVER_URL = '#';
  public static readonly ETL_SERVER_KEY = '#';
  public static readonly ETL_LIST_STORAGE_KEY = 'appSettings.etlServersList';  
  
  private _openmrsServer: string;
  private _etlServer: string;

  private _openmrsServerUrls = [
    'http://localhost:8080/openmrs'
  ];

  private _etlServerUrls = [
    '#'
  ];

  private templates = [
    {
      name: 'MRSBORA POC',
      amrsUrl: '/mrsbora',
      etlUrl: '#'
    },
    {
      name: 'MRSBORA POC Beta',
      amrsUrl: '#',
      etlUrl: '#'
    },
    {
      name: 'MRSBORA Test',
      amrsUrl: '#',
      etlUrl: '#'
    }
  ];

  get openmrsServerUrls(): string[] {
    return this._openmrsServerUrls;
  }

  get etlServerUrls(): string[] {
    return this._etlServerUrls;
  }

  constructor(private localStorageService: LocalStorageService) {
    let cachedUrls =
      localStorageService.getObject(AppSettingsService.OPENMRS_LIST_STORAGE_KEY);
    if (cachedUrls) {
      this._openmrsServerUrls = cachedUrls;
    } else {
      localStorageService.setObject(AppSettingsService.OPENMRS_LIST_STORAGE_KEY,
        this.openmrsServerUrls);
    }

    let cachedUrl = localStorageService.getItem(AppSettingsService.OPENMRS_SERVER_KEY);
    if (cachedUrl) {
      this._openmrsServer = cachedUrl;
    } else {
      this.setOpenmrsServer(AppSettingsService.DEFAULT_OPENMRS_SERVER_URL);
    }

    cachedUrls = localStorageService.getItem(AppSettingsService.ETL_LIST_STORAGE_KEY);
    if (cachedUrls) {
      this._etlServerUrls = JSON.parse(cachedUrls);
    } else {
      localStorageService.setItem(AppSettingsService.ETL_LIST_STORAGE_KEY,
        JSON.stringify(this.etlServerUrls));
    }

    cachedUrl = localStorageService.getItem(AppSettingsService.ETL_SERVER_KEY);
    if (cachedUrl) {
      this._etlServer = cachedUrl;
    } else {
      this.setEtlServer(AppSettingsService.DEFAULT_ETL_SERVER_URL);
    }
  }

  public getServerTemplates(): Array<object> {
    return this.templates;
  }

  public getOpenmrsServer(): string {
    return this.localStorageService
      .getItem(AppSettingsService.OPENMRS_SERVER_KEY) || this._openmrsServer;
  }

  public setOpenmrsServer(value: string): void {
    if (this._openmrsServerUrls.indexOf(value) === -1) {
      this.addOpenmrsUrl(value);
    }
    this.localStorageService.setItem(AppSettingsService.OPENMRS_SERVER_KEY, value);
    this._openmrsServer = value;
  }

  public getEtlServer(): string {
    return this.localStorageService.getItem(AppSettingsService.ETL_SERVER_KEY) || this._etlServer;
  }

  public setEtlServer(value: string): void {
    if (this._etlServerUrls.indexOf(value) === -1) {
      this.addEtlUrl(value);
    }
    this.localStorageService.setItem(AppSettingsService.ETL_SERVER_KEY, value);
    this._etlServer = value;
  }

  public addAndSetUrl(url: string, urlType: string = 'openmrs') {
    if (urlType === 'etl') {
      this.addEtlUrl(url);
      this.setEtlServer(url);
    } else {
      this.addOpenmrsUrl(url);
      this.setOpenmrsServer(url);
    }
  }

  public addEtlUrl(url: string): void {
    this.etlServerUrls.push(url);
    this.localStorageService.setObject(AppSettingsService.ETL_LIST_STORAGE_KEY,
      this.etlServerUrls);
  }

  public addOpenmrsUrl(url: string): void {
    this.openmrsServerUrls.push(url);
    this.localStorageService.setObject(AppSettingsService.OPENMRS_LIST_STORAGE_KEY,
      this.openmrsServerUrls);
  }

  public getOpenmrsRestbaseurl(): string {
    if (this.getOpenmrsServer().endsWith('/')) {
      return this.getOpenmrsServer() + AppSettingsService.OPENMRS_REST_SUFFIX;
    } else {
      return this.getOpenmrsServer() + '/' + AppSettingsService.OPENMRS_REST_SUFFIX;
    }
  }

  public getEtlRestbaseurl(): string {
    if (this.getEtlServer().endsWith('/')) {
      return this.getEtlServer();
    } else {
      return this.getEtlServer() + '/';
    }
  }
}
