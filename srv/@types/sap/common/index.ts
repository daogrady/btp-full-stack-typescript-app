// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../_';
export type Locale = string;
// the following represents the CDS aspect 'CodeList'
export function CodeList_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class CodeListAspect extends Base {
        name ?: string;
        descr ?: string;
  };
}
export const CodeList = CodeList_fn(__.Entity)
export type CodeList = InstanceType<typeof CodeList>

// the following represents the CDS aspect 'TextsAspect'
export function TextsAspect_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class TextsAspectAspect extends Base {
    /**
    * Type for a language code
    */
        locale ?: Locale;
  };
}
export const TextsAspect = TextsAspect_fn(__.Entity)
export type TextsAspect = InstanceType<typeof TextsAspect>

/**
* Code list for languages
* 
* See https://cap.cloud.sap/docs/cds/common#entity-sapcommonlanguages
*/
export function Language_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class LanguageAspect extends Base {
    /**
    * Type for a language code
    */
        code ?: Locale;
  };
}
export const Language = CodeList_fn(Language_fn(__.Entity))
export type Language = InstanceType<typeof Language>

export class Languages extends Array<Language> {
}

/**
* Code list for countries
* 
* See https://cap.cloud.sap/docs/cds/common#entity-sapcommoncountries
*/
export function Country_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class CountryAspect extends Base {
        code ?: string;
  };
}
export const Country = CodeList_fn(Country_fn(__.Entity))
export type Country = InstanceType<typeof Country>

export class Countries extends Array<Country> {
}

/**
* Code list for currencies
* 
* See https://cap.cloud.sap/docs/cds/common#entity-sapcommoncurrencies
*/
export function Currency_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class CurrencyAspect extends Base {
        code ?: string;
        symbol ?: string;
  };
}
export const Currency = CodeList_fn(Currency_fn(__.Entity))
export type Currency = InstanceType<typeof Currency>

export class Currencies extends Array<Currency> {
}
