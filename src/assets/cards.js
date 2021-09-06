const cards = [
  {
    name: 'Flex',
    description:
      'O elemento se comporta como um elemento de bloco e apresenta seu conteúdo de acordo com o modelo flexbox.',
    answer: 'display',
    uid: 1
  },
  {
    name: 'Absolute',
    description:
      'O elemento é removido do fluxo normal do documento e nenhum espaço é criado para o elemento no layout da página. Ele é posicionado relativamente ao elemento pai mais próximo que tenha posição; se não ele é colocado relativo ao bloco inicial de conteúdo. Sua posição final é determinada pelos valores top, right, bottom and left.',
    answer: 'position',
    uid: 2
  },
  {
    name: 'Row',
    description: 'O eixo principal do flex container é definido para ser o mesmo que a direção do texto. Os pontos de início e término principais são iguais à direção do conteúdo.',
    answer: 'discart',
    uid: 3
  },
  {
    name: 'Inline-Block',
    description:
      'O elemento gera uma caixa de elemento de bloco que fluirá com o conteúdo circundante, como se fosse uma única caixa embutida (se comportando como um elemento substituído)',
    answer: 'display',
    uid: 4
  },
  {
    name: 'Static',
    description: 'O elemento é posicionado de acordo com o fluxo normal do documento. As propriedades top, right, bottom, left e z-index não causam nenhum efeito. Este é o valor default.',
    answer: 'position',
    uid: 5
  },
  {
    name: 'Relative',
    description: 'O elemento é posicionado de acordo com o fluxo normal do documento e depois deslocado relativo à ele mesmo baseado nos valores top, right, bottom e left. O deslocamento não afeta a posição de outros elemento então o espaço ocupado pelo elemento no layout da página é o mesmo que a atributo static.',
    answer: 'position',
    uid: 6
  },
  {
    name: 'Fixed',
    description: 'O elemento é removido do fluxo normal do documento e nenhum espaço é criado para o elemento no layout da página. Ele é posicionado relativamente ao bloco de conteúdo estabelecido pelo viewport, exceto quando um de seus pais tenha as propriedades transform, perspective ou filter diferentes de "none". Sua posição final é determinada pelos valores de top, right, bottom e left.',
    answer: 'position',
    uid: 7
  },
  {
    name: 'Sticky',
    description: 'O elemento é posicionado de acordo com o fluxo normal do documento e depois deslocado relativamente ao seu elemento pai com scroll. O deslocamento não afeta a posição de outros elementos.',
    answer: 'position',
    uid: 8
  },
  {
    name: 'Inline',
    description: 'O elemento gera uma ou mais caixas de elementos inline.',
    answer: 'display',
    uid: 9
  },
  {
    name: 'Block',
    description: 'O elemento gera uma caixa de elemento de bloco.',
    answer: 'display',
    uid: 10
  },
  {
    name: 'List-Item',
    description: 'O elemento gera uma caixa de bloqueio para o conteúdo e uma caixa embutida de item de lista separada.',
    answer: 'display',
    uid: 11
  },
  {
    name: 'Flex',
    description: 'O elemento se comporta como um elemento de bloco e apresenta seu conteúdo de acordo com o modelo flexbox.',
    answer: 'display',
    uid: 12
  },
  {
    name: 'Grid',
    description: 'O elemento se comporta como um elemento de bloco e apresenta seu conteúdo de acordo com o modelo de grade.',
    answer: 'display',
    uid: 13
  },
  {
    name: 'Black',
    description: 'O elemento especificado é exibido com a cor preta.',
    answer: 'discart',
    uid: 14
  },
  {
    name: 'Solid',
    description: 'A borda do elemento será uma linha contínua sólida da cor especificada.',
    answer: 'discart',
    uid: 15
  },
  {
    name: 'Avoid-Page',
    description: 'Evita a quebra da página depois da caixa principal.',
    answer: 'discart',
    uid: 16
  },
  {
    name: 'Progress',
    description: 'O programa está ocupado no fundo mas a pessoa ainda pode interagir com a interface.',
    answer: 'discart',
    uid: 17
  },
  {
    name: 'Lighter',
    description: 'Um peso relativo de fonte mais leve que o elemento pai. Note que apenas quatro pesos de fonte são considerados para o cálculo de peso.',
    answer: 'discart',
    uid: 18
  },
]

export default cards
