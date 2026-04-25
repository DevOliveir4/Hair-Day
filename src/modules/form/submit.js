import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual
selectedDate.value = inputToday

// Define a data minima como sendo a data atual
selectedDate.min = inputToday

form.onsubmit = async (e) => {
    // Previne o comportamento padrão de carregar a página
    e.preventDefault()

    try {   
        // Recuperando o nome do cliente
        const name = clientName.value.trim()    
        if (!name) {
            return alert("Informe o nome do cliente!")
        }

        // Recupera o horario selecionado
        const hourSelected = document.querySelector(".hour-selected")
    

        if(!hourSelected) {
            return alert("Selecione o horario.")
        }

        // Recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")

        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um ID
        const id = new Date().getTime().toString()

        // Faz o agendamento
        await scheduleNew({
            id,
            name,
            when
        })

        // Recarrega a lista de agendamentos
        await schedulesDay()

        // Limpa o campo de nome do cliente
        clientName.value = ""

    } catch (error) {
        alert("Não foi possivel realizar o agendamento.")
        console.log(error)
    }
}