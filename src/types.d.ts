//un archivo que tiene definiciones del proyecto, nada de funciones.

export interface Sub{
    nick: string;
    avatar: string;
    subMonths: number;
    description?: string;
  } 


  export type SubsResponseFromApi=Array<{
    nick: string;
    months: number;
    profileUrl: string;
    description: string;
  }>