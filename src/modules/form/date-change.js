import {schedulesDay} from "../schedules/load.js"

// Selecina o input de data
const selectedDate = document.getElementById("date")

// Recarrega a lista de horarios quando o input mudar
selectedDate.onchange = () => schedulesDay()
