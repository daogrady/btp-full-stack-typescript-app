// This is an automatically generated file. Please do not change its contents manually!
import * as _sap_common from './sap/common';
import * as __ from './_';
export type Language = __.Association.to<_sap_common.Language>;
export type Currency = __.Association.to<_sap_common.Currency>;
export type Country = __.Association.to<_sap_common.Country>;
export type User = string;
// the following represents the CDS aspect 'cuid'
export function cuid_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class cuidAspect extends Base {
        ID ?: string;
  };
}
export const cuid = cuid_fn(__.Entity)
export type cuid = InstanceType<typeof cuid>

// the following represents the CDS aspect 'managed'
export function managed_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class managedAspect extends Base {
        createdAt ?: Date;
    /**
    * Canonical user ID
    */
        createdBy ?: User;
        modifiedAt ?: Date;
    /**
    * Canonical user ID
    */
        modifiedBy ?: User;
  };
}
export const managed = managed_fn(__.Entity)
export type managed = InstanceType<typeof managed>

// the following represents the CDS aspect 'temporal'
export function temporal_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class temporalAspect extends Base {
        validFrom ?: Date;
        validTo ?: Date;
  };
}
export const temporal = temporal_fn(__.Entity)
export type temporal = InstanceType<typeof temporal>

// the following represents the CDS aspect 'extensible'
export function extensible_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extensibleAspect extends Base {
        extensions__ ?: string;
  };
}
export const extensible = extensible_fn(__.Entity)
export type extensible = InstanceType<typeof extensible>
