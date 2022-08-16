let saldo = 0,
  saque,
  dep,
  transf,
  chequeEsp = 500,
  limiteSaque,
  limiteTransf,
  destinyName,
  destinyAcc;
const taxaSaque = 2.5,
  taxaTransf = 4.5;

window.onload = function () {
  document.getElementById('saldo').innerHTML = ` GC$ ${saldo.toFixed(2)}`;
};

function atualizarSaldo() {
  document.getElementById('saldo').innerHTML = ` GC$ ${saldo.toFixed(2)}`;
}

function clearMenu() {
  document.getElementById('parent').innerHTML = ``;
}

function deposit() {
  dep = parseFloat(document.getElementById('value').value);
  console.log(dep);
  if (dep > 0) {
    saldo += dep;
    alert(`Depósito realizado com sucesso!
    Seu novo saldo é de GC$: ${saldo.toFixed(2)}`);
    atualizarSaldo();
  } else {
    alert('O valor não pode ser GC$ 0.00');
  }
  clearMenu();
}

function depositMenu() {
  document.getElementById('parent').innerHTML = `
  <div class="depMenu" id="content">
        <h2>Depósito</h2>
        <p>Informe o valor a ser depositado</p>
        <input class="valueInput" type="number" name="" id="value" /><br />
        <div>
          <button class="btnSubmit" onclick="deposit()">Confirmar</button>
          <button class="btnCancel" onclick="clearMenu()">Cancelar</button>
        </div>
      </div>`;
}

function withdrawMenu() {
  limiteSaque = chequeEsp + saldo - taxaSaque;
  document.getElementById('parent').innerHTML = `
  <div class="withdrawMenu" id="content">
  <h2>Saque</h2>
  <p>Você tem um limite de cheque especial no valor de GC$ ${chequeEsp.toFixed(2)}</p>
  <br />
  <p>
    <b>Será cobrada uma taxa por saque de GC$ ${taxaSaque.toFixed(2)}</b>
  </p>
  <p>
    <b>Seu limite para saque é de GC$ ${limiteSaque.toFixed(2)}</b>
  </p>
  <p>(Saldo + Cheque especial - taxa)</p>
  <br />
  <p>Informe o valor a ser sacado</p>
  <input class="valueInput" type="number" name="" id="value" /><br />
  <div>
    <button class="btnSubmit" onclick="withdraw()">Confirmar</button>
    <button class="btnCancel" onclick="clearMenu()">Cancelar</button>
  </div>
</div>`;
}

function withdraw() {
  limiteSaque = saldo - taxaSaque;
  saque = parseFloat(document.getElementById('value').value);
  if (saque > 0) {
    if (saque > limiteSaque) {
      alert('Você não possui saldo suficiente');
    } else if (saque <= limiteSaque) {
      saldo -= saque + taxaSaque;
      alert(`Operação realizada com sucesso!
      Seu novo saldo é de GC$ ${saldo.toFixed(2)}`);
      atualizarSaldo();
    }
    clearMenu();
  }
}

function transferMenu() {
  limiteTransf = chequeEsp + saldo - taxaSaque;
  document.getElementById('parent').innerHTML = `
  <div class="transferMenu" id="content">
  <h2>Transferência</h2>
  <p>
    <b>Será cobrada uma taxa por transferência de GC$ ${taxaTransf.toFixed(2)}</b>
  </p>
  <p>
    <b>Seu limite para transferência é de GC$ ${limiteTransf.toFixed(2)}</b>
  </p>
  <p>Informe o nome de quem vai receber a transferência:</p>
  <input class="valueInput" type="text" name="" id="destinyName" /><br />
  <p>Informe o número da conta do destinatário</p>
  <input class="valueInput" type="number" name="" id="destinyAcc" /><br />
  <p>Informe o valor a ser transferido</p>
  <input class="valueInput" type="number" name="" id="value" /><br />
  <div>
    <button class="btnSubmit" onclick="transfer()">Confirmar</button>
    <button class="btnCancel" onclick="clearMenu()">Cancelar</button>
  </div>
</div>`;
}

function transfer() {
  limiteTransf = saldo + taxaTransf;
  transf = parseFloat(document.getElementById('value').value);
  destinyName = document.getElementById('destinyName').value;
  destinyAcc = parseFloat(document.getElementById('destinyAcc').value);
  if (transf > 0) {
    if (transf > limiteTransf) {
      alert('Você não possui saldo suficiente');
    } else if (transf <= limiteTransf) {
      saldo -= transf + taxaTransf;
      alert(`Sua transferência para ${destinyName} foi realizada com sucesso!
      Seu novo saldo é de GC$ ${saldo.toFixed(2)}`);
      atualizarSaldo();
    }
    clearMenu();
  }
}

function sair() {
  alert(`Obrigado por utilizar os serviços GrowBank
  Até logo!`);
}
