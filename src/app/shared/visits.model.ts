
export interface IVisit {
  id: number
  title: string
  littleDescription: String
  bigDescription: String
  imageUrl: string,
  session: ISession[]
}

export interface ISession {
  id: number,
  date: Date,
  time: string
  fullPrice: string
  halfPrice?: string
  placesAvailable : number
}

