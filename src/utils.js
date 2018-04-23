export function getEntryUrl (name,root) {
  if (weex.config.env.platform === 'Web') {
    if(root){
      return '/' + name + '.html';
    }else{
      return './' + name + '.html'
    }
  } else {
    let arr = weex.config.bundleUrl.split('/')
    if(root){
      var domain=arr.slice(0,arr.length-2);
      domain.push(name + '.js');
      return domain.join('/');
    }else{
      arr.pop()
      arr.push(name + '.js');
      return arr.join('/');
    }
  }
}