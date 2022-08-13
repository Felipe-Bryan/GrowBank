let saldo = 0,
  saque,
  dep,
  transf,
  chequeEsp = 500,
  limiteSaque,
  limiteTransf;
const taxaSaque = 2.5,
  taxaTransf = 4.5;
let opcao;

function deposito() {
  dep = Number(prompt('Informe o valor a ser depositado: '));
  if (dep > 0) {
    saldo += dep;
    alert(`Depósito realizado com sucesso!
    Seu novo saldo é de GC$: ${saldo.toFixed(2)}`);
  } else {
    alert('O valor não pode ser "0.00"');
  }
}

function sacar() {
  limiteSaque = chequeEsp + saldo - taxaSaque;
  saque = Number(
    prompt(`Será cobrada uma taxa de GC$ ${taxaSaque.toFixed(2)} pelo serviço
    Você possui um limite de cheque especial de ${chequeEsp.toFixed(2)}
    Seu limite para saque é de GC$: ${limiteSaque.toFixed(2)} (Saldo + cheque especial)    
    Informe o valor a ser sacado ou pressione "Enter" para retornar`)
  );
  if (saque > 0) {
    if (saque > limiteSaque) {
      alert('Você não possui saldo suficiente');
    } else if (saque <= limiteSaque) {
      saldo -= saque + taxaSaque;
      alert(`Operação realizada com sucesso!
      Seu novo saldo é de GC$ ${saldo.toFixed(2)}`);
    }
  }
}

function transferir() {
  limiteTransf = saldo - taxaTransf;
  transf = Number(
    prompt(`Seu limite para transferências é de GC$: ${limiteTransf.toFixed(2)}
  Será cobrada uma taxa de GC$ ${taxaTransf.toFixed(2)} pelo serviço
  Informe o valor a ser transferido ou pressione "Enter" para retornar`)
  );
  if (transf > 0) {
    if (transf > limiteTransf) {
      alert('Você não possui saldo suficiente');
    } else if (transf <= limiteTransf) {
      saldo -= transf + taxaTransf;
      alert(`Operação realizada com sucesso!
      Seu novo saldo é de GC$ ${saldo.toFixed(2)}`);
    }
  }
}

function sair() {
  alert(`Obrigado por utilizar os serviços GrowBank
  Até logo!`);
}

function abrirSistema() {
  do {
    opcao = Number(
      prompt(`Serviços disponíveis:
      (1) Consultar saldo
      (2) Depositar GrowCoins
      (3) Sacar GrowCoins
      (4) Transferir GrowCoins
      (5) Sair do sistema
      - Digite a opção desejada: `)
    );
    if (opcao == 1) {
      alert(`Seu saldo é de GC$ ${saldo.toFixed(2)}`);
    }
    if (opcao == 2) {
      deposito();
    }
    if (opcao == 3) {
      sacar();
    }
    if (opcao == 4) {
      transferir();
    }
    if (opcao == 5) {
      sair();
    }
    if (opcao <= 0 || opcao > 5) {
      alert('Digite uma opção válida!');
    }
  } while (opcao !== 5);
}
