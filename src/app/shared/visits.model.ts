
export interface IVisit {
  id: number
  title: string
  littleDescription: String
  bigDescription: String
  imageUrl: string,
  session: ISession[]
}

export interface ISession {
  date: Date,
  time: string
  fullPrice: string
  halfPrice?: string
  placesAvailable : number
}

