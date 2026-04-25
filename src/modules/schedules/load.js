import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js"
import { schedulesShow } from "./show.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    // Obtem a data do input
    const date = selectedDate.value

    // Buscar na API os agendamentos
    const dailySchadules = await scheduleFetchByDay({date})


    // Exibe os agendamentos
    schedulesShow({dailySchadules})

    // Renderiza as horas diponiveis
    hoursLoad({date, dailySchadules})



}