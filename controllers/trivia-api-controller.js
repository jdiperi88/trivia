const triviaapiController = {};

triviaapiController.index = (req, res) => {
    console.log('herb');
    res.render('trivia/trivia-index', {
    trivia: res.locals.trivia,
  });
console.log(trivia);
}

module.exports = triviaapiController;