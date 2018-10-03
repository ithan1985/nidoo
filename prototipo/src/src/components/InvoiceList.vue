<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Lista de Facturas
        <b-link href="#/add-invoice">(Adicionar Factura)</b-link>
      </h2>
      <b-table striped hover :items="invoices" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Detalle</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'InvoiceList',
  data () {
    return {
      fields: {
        placa: { label: 'Placa', sortable: true, 'class': 'text-center' },
        nombre_cliente: { label: 'Nombre del Cliente', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      invoices: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/invoice`)
    .then(response => {
      this.invoices = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (invoice) {
      this.$router.push({
        name: 'ShowInvoice',
        params: { id: invoice._id }
      })
    }
  }
}
</script>
