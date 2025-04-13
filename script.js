const apiUrl = "http://localhost:5000";

async function carregarRegistros() {
    const res = await fetch(apiUrl + "/fluxo_caixa");
    const dados = await res.json();
    const tbody = document.querySelector("#tabela-registros tbody");
    tbody.innerHTML = "";
    dados.forEach(registro => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${registro.data}</td>
            <td>${registro.descricao}</td>
            <td>${registro.tipo}</td>
            <td>R$ ${registro.valor.toFixed(2)}</td>
            <td><button class="delete-button" onclick="deletar(${registro.id})">Cancelar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

async function carregarSaldo() {
    const res = await fetch(apiUrl + "/saldo");
    const { saldo } = await res.json();
    document.getElementById("saldo").innerText = "Saldo: R$ " + saldo.toFixed(2);
}

document.getElementById("form-registro").addEventListener("submit", async (e) => {
    e.preventDefault();
    const descricao = document.getElementById("descricao").value;
    const tipo = document.getElementById("tipo").value;
    const valor = parseFloat(document.getElementById("valor").value);
    await fetch(apiUrl + "/fluxo_caixa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ descricao, tipo, valor })
    });
    e.target.reset();
    carregarRegistros();
    carregarSaldo();
});

async function deletar(id) {
    await fetch(`${apiUrl}/fluxo_caixa/${id}`, { method: "DELETE" });
    carregarRegistros();
    carregarSaldo();
}

carregarRegistros();
carregarSaldo();
