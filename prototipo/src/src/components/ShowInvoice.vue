<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Mostrar Factura
        <b-link href="#/">(Lista de Facturas)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{invoice.placa}}
        </template>
        <template slot="lead">
          Nombre Cliente: {{invoice.nombre_cliente}}<br>
          Minutos: {{invoice.minutos}}<br>
          Valor Minuto: {{invoice.valor_minuto}}<br>
          Total: {{invoice.total}}<br>
          Fecha: {{invoice.fecha}}<br>
        </template>
        <hr class="my-4">

      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ShowInvoice',
  data () {
    return {
      invoice: []
    }
  },
  created () {
    axios.get(`http://157.253.238.35/invoice/` + this.$route.params.id)
    .then(response => {
      this.invoice = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    editinvoice (invoiceid) {
      this.$router.push({
        name: 'EditInvoice',
        params: { id: invoiceid }
      })
    },
    deleteinvoice (invoiceid) {
      axios.delete('http://157.253.238.35/invoice/' + invoiceid)
      .then((result) => {
        this.$router.push({
          name: 'InvoiceList'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
