programa {
  funcao inicio() {
    real saldo = 0.0, dep, trans, saque, taxaSaque = 2.5, taxaTrans = 4.5, chequeEsp = 500, limiteSaque, limiteTrans
    inteiro opcao

    faca{
            
            escreva("Servi�os dispon�veis:\n")
            escreva("(1) Visualizar o saldo em conta\n(2) Depositar GrowCoins\n(3) Sacar GrowCoins\n(4) Transferir GrowCoins\n(5) Sair do sistema")
			escreva("\nEscolha a op��o desejada: ")
            leia(opcao)

            se(opcao == 1){
                limpa()
                escreva("------------------------------------------\n")
                escreva("Seu saldo � de GC$: " + saldo + "\n")
                escreva("------------------------------------------\n")
                }
            
            se(opcao == 2){
                limpa()
                escreva("Informe o valor a ser depositado GC$: ")
                leia(dep)
                saldo = saldo + dep
                limpa()
                escreva("------------------------------------------")
                escreva("\nDep�sito realizado com sucesso.\nSeu novo saldo � GC$: " + saldo + "\n")
                escreva("------------------------------------------\n")
            }
            
            se(opcao == 3){
                limpa()
                limiteSaque = (saldo + chequeEsp) - taxaSaque
                escreva("Seu saldo atual � de GC$: " + saldo + ".\n")
                escreva("------------------------------------------\n")
                escreva("Seu limite dispon�vel para saque � de GC$ " + limiteSaque + "\n(Saldo + Cheque especial - Taxa)\n")
                escreva("------------------------------------------\n")
                escreva("Ser� cobrada uma taxa de GC$ 2.50 por saque.\n")
                escreva("------------------------------------------\n")
                escreva("Informe o valor a ser sacado ou '0' para retornar -  GC$: ")
                leia(saque)
                se(saque>0){
                    saque = saque + taxaSaque
                    limpa()
                    se(saque<=(saldo + chequeEsp)){
                        saldo = saldo - saque
                        escreva("------------------------------------------\n")
                        escreva("Opera��o realizada com sucesso.\nSeu novo saldo � de GC$: " + saldo + "\n")
                        escreva("------------------------------------------\n")
                    }senao{
                        escreva("------------------------------------------\n")
                        escreva("Voc� n�o possui saldo suficiente para a opera��o.\n")
                        escreva("------------------------------------------\n")
                    }
                }senao{
                    limpa()
                    escreva("Nenhuma opera��o foi realizada.\n")
                    escreva("------------------------------------------\n")
                }

                
            }
            
            se(opcao == 4){
                limpa()
                limiteTrans = saldo - taxaTrans
                escreva("Seu saldo atual � de GC$: " + saldo + ".\n")
                escreva("------------------------------------------\n")
                se(limiteTrans<=0){
                    escreva("Voc� n�o possui saldo dispon�vel para realizar transfer�ncias.\n")
                    }senao{
                        escreva("Seu limite dispon�vel para transfer�ncia � de GC$ " + limiteTrans + ".\n(Saldo - Taxa)\n")
                    }
                escreva("------------------------------------------\n")
                escreva("Ser� cobrada uma taxa de GC$ 4.50 por transfer�ncia.\n")
                escreva("------------------------------------------\n")
                escreva("Informe o valor a ser transferido ou '0' para retornar - GC$: ")
                leia(trans)
                    se(trans>0){
                    trans = trans + taxaTrans
                    limpa()
                    se(trans<=saldo){
                        saldo = saldo - trans
                        escreva("------------------------------------------\n")
                        escreva("Transfer�ncia realizada com sucesso.\nSeu novo saldo � de GC$: " + saldo + "\n")
                        escreva("------------------------------------------\n")
                    }senao{
                        escreva("------------------------------------------\n")
                        escreva("Voc� n�o possui saldo suficiente para a opera��o.\n")
                        escreva("------------------------------------------\n")
                    }
                }senao{
                    limpa()
                    escreva("Nenhuma opera��o foi realizada.\n")
                    escreva("------------------------------------------\n")
                }
            }

            se(opcao == 5){
                limpa()
                escreva("------------------------------------------\n")
                escreva("Obrigado por utilizar os servi�os GrowBank\nAt� logo!\n")
                escreva("------------------------------------------\n")
            }

            se(opcao == 0 ou opcao > 5){
            limpa()
            escreva("------------------------------------------\n")
            escreva("Digite uma op��o v�lida.\n")
            escreva("------------------------------------------\n")
            }
    }enquanto(opcao != 5)
}