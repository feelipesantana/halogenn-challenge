import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface blockType{
  title:string
  description:string;
  image?:string;
}

export interface inicialStateProps {
  firstBlock: blockType
  secondBlock: blockType
  thirdBlock: blockType
}

const initialState: inicialStateProps = {
  firstBlock:{
    title: "PRODUTOS",
    description: "Vidrarias e Equipamentos",
    image: "lab"
  },
  secondBlock:{
    title: "QUÍMICOS",
    description: "Materiais Químicos",
    image: "bottle"
  },
  thirdBlock:{
    title: "LABORATÓRIOS",
    description: "Ferramentas e utensílios",
    
  }
}

export const useDepartment = createSlice({
  name: 'departmentBlock',
  initialState,
  reducers: {}
})


export default useDepartment.reducer