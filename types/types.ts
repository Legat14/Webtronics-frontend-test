export enum BtnTypes {
  BUTTON = 'button',
  SUBMIT = 'submit'
}

export type FormValues = {
  name: string,
  phone: string,
  email: string,
}

export type QuestionType = {
  id: number,
  class: string,
  question: string,
  answer: string,
}

export type ReviewType = {
  id: number,
  class: string,
  classOpened: string,
  classClosed: string,
  src: string,
  offset: number,
  title: string,
  text: string,
}

export type ProgramType = {
  id: number,
  class: string,
  src: string,
  heading: string,
}

export type StepDataType = {
  id: number,
  class: string,
  heading: string,
  text: string,
  isLeft: boolean,
}

export type StepType = StepDataType & {
  stepNumber: number,
}
