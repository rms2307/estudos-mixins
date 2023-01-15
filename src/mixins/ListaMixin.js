export default {
  data: () => ({
    titulo: 'Titulo Padrão',
    itens: [],
    item: '',
  }),
  methods: {
    adicionarItem() {
      this.itens.push(this.item)
      this.item = ''
    },
  },
  created() {
    console.log('Mixin criado.')
  },
}
