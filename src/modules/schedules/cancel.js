import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"

const periods = document.querySelectorAll(".period")

// Gera evento de clique para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a LI pai do elemento clicado
      const item = event.target.closest("li")

      // Pega o id do agendamento para remover
      const { id } = item.dataset

      // Confirma que o id foi selecionado
      if (id) {
        // Confirma que o usuário deseja cancelar
        const isConfirm = confirm("Deseja cancelar o agendamento?")

        if (isConfirm) {
          // Faz a requisição na API para remover o agendamento
          await scheduleCancel({ id })

          // Recarrega a lista de agendamentos
          schedulesDay()
        }
      }
    }
  })
})
