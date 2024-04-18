const Road = require('../model/Road');
class RoadService {

  static async selectAll() {
    return await Road.find({}).sort({ update_at: -1 });
  }

  static async selectById(params) {
    return await Road.findById(params.id);
  }

  static async createOne(params) {
    return new Promise((resolve, reject) => {
      Road.create(params, (err, Road) => {
        if (err) {
          reject(err)
        } else {
          resolve(Road)
        }
      })
    })
  }

  static async updateOne(params) {
    return new Promise((resolve, reject) => {
      Road.findOneAndUpdate({ _id: params.id }
        , {
          $set: {
            title: params.title,
            desc: params.desc
          }
        }, {
          new: true
        })
        .then(Road => resolve(Road))
        .catch(err => reject(err))
    })
  }

  static async removeOne(params) {
    return new Promise((resolve, reject) => {
      Road.findOneAndRemove({
        _id: params.id
      })
        .then(Road => resolve(`${Road.title}删除成功`))
        .catch(err => reject(err))
    })
  }

}
module.exports = RoadService;
