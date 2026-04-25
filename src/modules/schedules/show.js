import dayjs, { Dayjs } from "dayjs";

// Seleciona as sessões manhã, tarde e noite
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchadules}) {
    try {
        // Limpa as listas
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        // Renderiza os agendamentos por periodos
        dailySchadules.forEach((schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            // Adiciona o id do agendamento
            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("H:mm")
            name.textContent = schedule.name

            // Cria o ícone de cancelar o agendamento
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            // Adiciona o tempo, nome e icone no item  
            item.append(time, name, cancelIcon)

            // Obtem somente a hora
            const hour = dayjs(schedule.when).hour()


            // Renderiza o argumento na sessao (manha, tarde ou noite)
            if (hour <= 12) {
                periodMorning.appendChild(item)
            } else if (hour >= 12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            } else {
                periodNight.appendChild(item)
            }

        });

    } catch (error) {
        console.log(error)
        alert("Não foi possível exibir os agendamentos.")
    }
}