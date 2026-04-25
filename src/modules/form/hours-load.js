import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"
import {hoursCLick} from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({date, dailySchadules}) {
    // Limpa a lista de horarios
    hours.innerHTML = ""

    // Obtem a lista de horarios ocupados
    const unavailableHours = dailySchadules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

    const opening = openingHours.map((hour) => {
        // Recupera somente a hora
        const [scheduleHours, _] = hour.split(":")
        

        // Adiciona a hora na date e verifica se esta no passada
        const isHourPast = dayjs(date).add(scheduleHours, "hour").isBefore(dayjs())
        
        const available = !unavailableHours.includes(hour) && !isHourPast
        
        return {
            hour,
            available
        }
    })

    // Renderiza os horarios
    opening.forEach(({hour, available}) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if (hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if (hour == "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour == "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })
    
    // Adiciona o envento de clique nos horarios diponiveis
    hoursCLick()
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")

    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}