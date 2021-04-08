type IRequest =  {
  request(): void;
}

class Rest implements IRequest {
  request() {
    console.log('Request is call with use rest');
  }
}

class Rpc {
  callProcedure() {
    console.log('Request is call with use rpc')
  }
}

class AdapterRpc implements IRequest {
  private rpc;

  constructor(rpc) {
    this.rpc = rpc;
  }

  request() {
    this.rpc.callProcedure()
  }
}

class Req implements IRequest {
  private method: IRequest;

  constructor(method: IRequest) {
    this.method = method;
  }

  request() {
    this.method.request();
  }
}

new Req(new Rest()).request();
new Req(new AdapterRpc(new Rpc())).request()