import { StepDataType, StepType } from '../types/types'

class StepObj {
  id: number;
  stepNumber: number;
  class: string;
  heading: string;
  text: string;
  isLeft: boolean;

  constructor(data: StepDataType) {
    this.id = data.id;
    this.stepNumber = this.id + 1;
    this.class = data.class;
    this.heading = data.heading;
    this.text = data.text;
    this.isLeft = data.isLeft;
  }
}

export const stepsData: StepType[] = [
  new StepObj({
    id: 0,
    class: '',
    heading: 'Introduction to Front-End',
    text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    isLeft: true,
  }),
  new StepObj({
    id: 1,
    class: '',
    heading: 'Overview of Development',
    text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    isLeft: false,
  }),
  new StepObj({
    id: 2,
    class: '',
    heading: 'Introduction to Front-End',
    text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    isLeft: true,
  }),
  new StepObj({
    id: 3,
    class: '',
    heading: 'Overview of Development',
    text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    isLeft: false,
  }),
  new StepObj({
    id: 4,
    class: '',
    heading: 'Introduction to Front-End',
    text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    isLeft: true,
  }),
  new StepObj({
    id: 5,
    class: '',
    heading: 'Overview of Development',
    text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
    isLeft: false,
  }),
]