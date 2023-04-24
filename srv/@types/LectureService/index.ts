// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
import * as _lectureschedule from './../lectureschedule';
import * as _ from './..';





export function AlldayEvent<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class AlldayEventAspect extends Base {
    reqSeats: number;
    date: Date;
  };
}
const AlldayEventXtended = AlldayEvent(__.Entity)
export type AlldayEvent = InstanceType<typeof AlldayEventXtended>

export class AlldayEvent_ extends Array<AlldayEvent> {
}

export function Lecture<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class LectureAspect extends Base {
    starttime: Date;
    endtime: Date;
    course: __.Association.to<_lectureschedule.Cours>;
    prof: __.Association.to<_lectureschedule.Professor>;
    room: __.Association.to<_lectureschedule.Room>;
    allday: boolean;
  };
}
const LectureXtended = _.cuid(Lecture(__.Entity))
export type Lecture = InstanceType<typeof LectureXtended>

export class Lectures extends Array<Lecture> {
}

export function Room<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class RoomAspect extends Base {
    ID: number;
    name: string;
    seats: number;
    lectures: __.Association.to.many<_lectureschedule.Lectures>;
  };
}
const RoomXtended = Room(__.Entity)
export type Room = InstanceType<typeof RoomXtended>

export class Rooms extends Array<Room> {
}

export function Cours<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class CoursAspect extends Base {
    ID: string;
    name: string;
    descr: string;
    ects: number;
    lectures: __.Association.to.many<_lectureschedule.Lectures>;
  };
}
const CoursXtended = Cours(__.Entity)
export type Cours = InstanceType<typeof CoursXtended>

export class Courses extends Array<Cours> {
}

export function Professor<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class ProfessorAspect extends Base {
    ID: number;
    firstname: string;
    lastname: string;
    title: string;
    lectures: __.Association.to.many<_lectureschedule.Lectures>;
  };
}
const ProfessorXtended = Professor(__.Entity)
export type Professor = InstanceType<typeof ProfessorXtended>

export class Professors extends Array<Professor> {
}

// action
export declare const createEvent: (reqSeats: number, date: Date) => {
  };