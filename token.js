window.webpackChunkdiscord_app.push([
    [Math.random()],
    {},
    req => {
      for (const m of Object.keys(req.c)
        .map(x => req.c[x].exports)
        .filter(x => x)) {
        if (m.default && m.default.getToken !== undefined) {
          return copy(m.default.getToken());
        }
        if (m.getToken !== undefined) {
          return copy(m.getToken());
        }
      }
    },
  ]);
  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    
  } else {
    console.log('You are on the server')
    
  }
  
  console.log('%cWorked!', 'font-size: 50px');
  console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');