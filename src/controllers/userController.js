import user from '../models/user.js';

export const criarUser = (req, res) => {
  const { nome, coins } = req.body;
  user.create({ nome, coins }, (error, usr) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(201).json({ msg: 'Usuario criado com sucesso', data: usr });
    }
  });
};

export const editaUser = (req, res) => {
  const id = req.params.id;
  user.findOneAndUpdate({ _id: id }, req.body, { new: true }, (error, usr) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res
        .status(200)
        .json({ msg: 'Usuario atualizado com sucesso', data: usr });
    }
  });
};

export const leituraUser = (req, res) => {
  user.find({}, (error, usr) => {
    if (error) {
      res.status(500).json(error);
    } else {
      const usuarios = usr.map((u) => {
        const medals = Math.trunc(u.coins / 10);
        const trophies = Math.trunc(medals / 3);
        return { ...u._doc, medals, trophies };
      });
      res.status(200).json({ msg: 'Usuarios encontrados', data: usuarios });
    }
  });
};

export const deletarUser = (req, res) => {
  const id = req.params.id;
  user.findOneAndDelete({ _id: id }, req.body, (error, usr) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json({ msg: 'Usuario excluido', data: usr });
    }
  });
};
