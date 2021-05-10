@import "./style.css";
---
keywords: Printer Interface, Thermal Printer Interface, Interface para impressora Termica em NodeJS, Interface Thermal Nodejs
last_updated: Maio 9, 2021
---

# Thermal-Printer-Interface

[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JotinhaBR/Thermal-Printer-Interface)
[![Doação](https://img.shields.io/badge/Fa%C3%A7a%20uma-Doa%C3%A7%C3%A3o%20☕-blue?style=for-the-badge)](http://pay.fdoma.in/assinatura/ndZbDVNPtMj16NaQ)
[![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-brightgreen?style=for-the-badge)](https://github.com/JotinhaBR/Thermal-Printer-Interface/blob/main/license.md)

Interface NodeJS Express para impressora térmica Adafruit ou Sparkfun conectadas a uma Raspberry com o sistema Raspbian OS

<center>
  <img src="https://i.imgur.com/FmYRJ9k.png" alt="Print mobile Thermal Printer Interface" align="left" width="25%" />
  <img src="https://i.imgur.com/EmrDJS1.png" alt="Print mobile Thermal Printer Interface" width="70%" />
  <br/><br/>
</center>

# 🖨 Requisitos de hardware
- Uma impressora "Mini Thermal Receipt Printer [Adafruit](https://www.adafruit.com/product/597) ou [Sparkfun](https://www.sparkfun.com/products/14970)"
- Uma fonte de energia 5V 2A para a impressora ([Esse artigo me ajudou a saber o que comprar para ligar a impressora](https://learn.adafruit.com/mini-thermal-receipt-printer/power))
- Uma Raspberry com portas para conectores (Eu testei em uma [Raspberry pi 3 model b](https://amzn.to/3o2OLrb))
- Uma [fonte de energia para a Raspberry](https://amzn.to/3evv9Zy)
- Wifi onde a Raspberry e impressora irão ficar (Você terá que está no mesmo wifi para cessar a interface web nós seus dispositivos)

# 💻 Requisitos de software na raspberry
- [Raspberry Pi OS with desktop](https://www.raspberrypi.org/software/operating-systems/#raspberry-pi-os-32-bit)
- [NodeJS e NPM instalados](https://nodejs.org/pt-br/)

# 🔌 Conexão de cabos Raspberry e Mini Thermal receipt Printer
![Foto das conexões da Raspberry com a Impressora](https://i.imgur.com/wImpSNj.jpg)
<center>
  <img src="https://i.imgur.com/7OwHxDk.jpg" alt="Foto das conexões da Raspberry com a Impressora" align="left" width="45%" />
  <img src="https://i.imgur.com/t0frHkP.jpg" alt="Foto das conexões da Raspberry com a Impressora" width="45%" />
  <br/>
</center>

# 👨‍💻 Instalando Thermal Printer Interface na Raspberry
- Vá até a sua pasta "Documents" execute o seguinte comando via terminal `git clone https://github.com/JotinhaBR/Thermal-Printer-Interface`
- Acesse a pasta criada do repositorio usando o comando `cd Thermal-Printer-Interface/`
- Para iniciar o servidor web da interface digite `sudo npm start`
- Pronto automaticamente irá fazer atualizações de pacotes npm e irá iniciar o servidor, caso você queira fazer o servidor iniciar automatico ao ligar veja os proximos passos:

# 🚀 Fazendo Thermal Interface iniciar junto a Raspberry
- No terminal digite o seguinte comando `sudo nano /etc/profile` 
- Ao final desse arquivo adicione as seguintes linhas de codigo:
~~~
# Iniciar Thermal Printer Interface
cd  /home/pi/Documents/Thermal-Printer-Interface
sudo git pull
sudo npm start
~~~
- Depois aperte Crlt + X e aperte S  e depois Enter para salvar as alterações.
- Pronto agora sempre que ligar a Raspberry o Thermal Interface será iniciado.
- OBS: Caso sua raspberry estejá com nome de usuario diferente de `pi` você deve mudar a pasta colocando no codigo acima ^^.

# 📜 Usando Thermal Interface
- Ao iniciar o Thermal Interface com o comando `sudo npm start` o sistema fará uma impressão de test e tambem uma impressão informando o IP atual em que a interface se localiza, algo parecido com isso:
![Foto da primeira impressão ao ligar](https://i.imgur.com/lYG1w2C.jpg)
- OBS: Caso a impressora não tenha impremido essa folha é possivel que a sua conexão com os cabos de conexão estejá errada ou o servidor web Thermal Interface não iniciou ainda ele pode demorar um pouco.
- Digite o IP atual impresso no seu navegador seja em seu celular ou computador e pronto, deve aparecer essa tela:
![Foto da interface](https://i.imgur.com/PDfT8IM.png)
- OBS: Caso a interface não estejá carregando verifique se você está na mesma rede WIFI que a sua raspberry ou se o servidor web Thermal Interface já iniciou ele pode demorar um pouco.
- Feito isso agora é só se divertir e Imprimir qualquer texto que você quiser basta digita na caixa e clicar em imprimir :)

Você pode acessar esse IP de qualquer dispostivo que estejá conectado ao mesmo WIFI da Raspberry, então da pra imprimir de qualquer lugar de sua casa provavelmente :)

Tambem é possivel continuar usando a Raspberry inclusive para usar a inaterface nela mesma caso tenha uma tela.


# 📫 Contribuindo para Thermal-Printer-Interface
Para contribuir com Thermal-Printer-Interface, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin Thermal-Printer-Interface / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

# 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars3.githubusercontent.com/u/6248317" width="100px;" alt="Foto de Rubens Flinco"/><br>
        <sub>
          <b>Rubens Flinco</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

# 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](https://github.com/JotinhaBR/Thermal-Printer-Interface/blob/main/license.md) para mais detalhes.

[⬆ Voltar ao topo](#)<br>
