// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
import * as _lectureschedule from './../lectureschedule';
import * as _ from './..';
export function AlldayEvent_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class AlldayEventAspect extends Base {
        reqSeats ?: number;
        date ?: Date;
  };
}
export const AlldayEvent = AlldayEvent_fn(__.Entity)
export type AlldayEvent = InstanceType<typeof AlldayEvent>

export class AlldayEvent_ extends Array<AlldayEvent> {
}

export function Lecture_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class LectureAspect extends Base {
        starttime ?: Date;
        endtime ?: Date;
        course ?: __.Association.to<_lectureschedule.Cours>;
        prof ?: __.Association.to<_lectureschedule.Professor>;
        room ?: __.Association.to<_lectureschedule.Room>;
        allday ?: boolean;
  };
}
export const Lecture = _.cuid_fn(Lecture_fn(__.Entity))
export type Lecture = InstanceType<typeof Lecture>

export class Lectures extends Array<Lecture> {
}

export function Room_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class RoomAspect extends Base {
        ID ?: number;
        name ?: string;
        seats ?: number;
        lectures ?: __.Association.to.many<_lectureschedule.Lectures>;
  };
}
export const Room = Room_fn(__.Entity)
export type Room = InstanceType<typeof Room>

export class Rooms extends Array<Room> {
}

export function Cours_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class CoursAspect extends Base {
        ID ?: string;
        name ?: string;
        descr ?: string;
        ects ?: number;
        lectures ?: __.Association.to.many<_lectureschedule.Lectures>;
  };
}
export const Cours = Cours_fn(__.Entity)
export type Cours = InstanceType<typeof Cours>

export class Courses extends Array<Cours> {
}

export function Professor_fn<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class ProfessorAspect extends Base {
        ID ?: number;
        firstname ?: string;
        lastname ?: string;
        title ?: string;
        lectures ?: __.Association.to.many<_lectureschedule.Lectures>;
  };
}
export const Professor = Professor_fn(__.Entity)
export type Professor = InstanceType<typeof Professor>

export class Professors extends Array<Professor> {
}

// action
export declare const createEvent: ( args: { reqSeats: number, date: Date }) => Lectures;