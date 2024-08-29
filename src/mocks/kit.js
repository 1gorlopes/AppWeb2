import disco from '../../assets/produtos/discodemons.jpg'
import camisapreta from '../../assets/produtos/camisaurbanpreta.jpeg'
import bonepreto from '../../assets/produtos/boneurbanpreto.jpeg'


const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Kit WRLD - Exclusive",
        detalhes: "Nosso Kit exclusivo para fãs de Juice WRLD e Moda Urbana",
        preco: "R$699,99",
        botao: "Adicionar a lista de desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
            {
                nome: "1x T-Shirt Urban",
                imagemKit: camisapreta,
            },
            {
                nome: "1x Boné Urban",
                imagemKit: bonepreto,
            },
            {
                nome: "1x Disco Vinil",
                imagemKit: disco,
            },
        ]
    }
}

export default produto;

