import createRepository from '../api/index';
import requestMethods from '../api/fetchRequests';

export default (ctx, inject) => {
  inject('api', createRepository(ctx.$axios, ctx.store, ctx));
  inject('fetch', requestMethods(ctx.$axios, ctx.store, ctx));
}