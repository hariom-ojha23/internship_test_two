const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('User', {
    user_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    user_name: {
      type: Sequelize.STRING,
    },
    user_email: {
      type: Sequelize.STRING,
    },
    user_password: {
      type: Sequelize.STRING,
    },
    user_image: {
      type: Sequelize.STRING,
      defaultValue:
        'https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png',
    },
    last_logged_in: {
      type: Sequelize.STRING,
    },
    total_orders: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  })
}
