// utilizando axios com a nova sitaxe do ES8 async aWait para buscar dados na api.

import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn('User not found');
        }
          
    }
}

Api.getUserInfo('saraivafelipe27');