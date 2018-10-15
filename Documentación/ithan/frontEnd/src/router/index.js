import Vue from 'vue'
import Router from 'vue-router'
import InvoiceList from '@/components/InvoiceList'
import ShowInvoice from '@/components/ShowInvoice'
import CreateInvoice from '@/components/CreateInvoice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InvoiceList',
      component: InvoiceList
    },
    {
      path: '/show-invoice/:id',
      name: 'ShowInvoice',
      component: ShowInvoice
    },
    {
      path: '/add-invoice',
      name: 'CreateInvoice',
      component: CreateInvoice
    }
  ]
})
