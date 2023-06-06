<?php

class User
{
    private function connectBD(){
        $user="wac209_user";
        $password="wac209";
        try{
            $database = new PDO('mysql:host=64.226.64.80;dbname=twitter_academy_db',$user,$password);
            $database->exec('SET NAMES "UTF8"');
            return $database;
        } catch (PDOException $e){
            echo 'Erreur : '. $e->getMessage();
            die();
        }
    }

    public function createUser($data)
    {   
        $avatar = array('https://tinyurl.com/yfrynufw', 'https://tinyurl.com/4f8zzjxv', 'https://tinyurl.com/mrxm78wk', 'https://tinyurl.com/ycx3zajw', 'https://tinyurl.com/znsdwy7c', 'https://tinyurl.com/mtztt8re', 'https://tinyurl.com/4zjtt479', 'https://tinyurl.com/3chyvhjy', 'https://tinyurl.com/yvaskb5n', 'https://tinyurl.com/y8t435wb', 'https://tinyurl.com/3d36btp7');
        $banner = array('https://tinyurl.com/mpcye9sk', 'https://tinyurl.com/w2mmzyar', 'https://tinyurl.com/5dr27hnn');
        $randomavatar = rand(0,10);
        $randombanner = rand(0,2);

        $database = $this->connectBD();
        // 1° lastname
        $name = $data["lastname"];
        $name .= " " ;
        $name .= $data["firstname"];
        // 3° birthday
        $date = $data["birth"];
        // 6° username
        $username = $data["username"];
        // 7° email
        $mail = $data["mail"];
        // 8° password
        $password = $data["password"];
        $banner = "https://external-preview.redd.it/-5o8NeL108tOEFBc5lM_Y52fBnC-oUYjpreu_bbwuxU.jpg?auto=webp&s=6f1ee5c17e9515edb428c271c7e4334243478515";
        $avatar = $avatar[$randomavatar];

        // $name = "trinket";
        // $date = "1967-10-11";
        // $username = "axike";
        // $mail = "test@hotmail.fr";
        // $password = "password";

        $salt = "vive le projet tweet_academy";

        // hash le password.
        $password_hash = hash('ripemd160', $salt . $password);

        // je crée ma requête en assignant une variable "check_email".
        $check_email = "SELECT * FROM users WHERE email = :email";
        // dans laquelle je la prépare en lui mettant son paramètre.
        $match_found = $database->prepare($check_email);
        // je la bindparam son email afin de la trouver dans la bdd.
        $match_found->bindParam(':email', $mail, PDO::PARAM_STR);
        // le row signifie une string vide (il n'y a rien).

        // si on met le row dans le if,  
        if ($match_found->execute()) {
            // il permettra de checker tous les emails qui matchent dans le paramètre passé à la bdd.
            // elle va mettre dans une seule fois dans le tableau row
            $row = $match_found->fetchAll(PDO::FETCH_ASSOC);
        }

        // si l'email existe, l'email va entrer dans le tableau row. 
        // si row est égal 0 donc (l'email n'existe pas dans la bdd).
        if (is_array($row) && count($row) == 0) {
            $request = $database->prepare("INSERT INTO users (name, birthdate, username, email, password, banner, avatar)
            VALUES (:name, :birth, :username, :email, :password, :banner, :avatar);");
            $request->bindParam(':name', $name);
            $request->bindParam(':birth', $date);
            $request->bindParam(':username', $username);
            $request->bindParam(':email', $mail);
            $request->bindParam(':password', $password_hash);
            $request->bindParam(':avatar', $avatar);
            $request->bindParam(':banner', $banner);
            
            if ($request->execute()) {
                $table = $request->fetchAll(PDO::FETCH_ASSOC);
                $success = true;
                $data = $table;
            } else {
                echo "Nous sommes désolés, une erreur s'est produite.";
                return "Nous sommes désolés, une erreur s'est produite.";
            }
            
        } else {
            return "L'email est déjà utilisé.";
        }
    }

 
    public function connectUser($data)
    {
        $database = $this->connectBD();
        // 1° email
        $email = $data["mail"];
        // 2° password
        $password = $data["password"];

        // $email = "test@hotmail.fr";
        // $password = "password";

        $salt = "vive le projet tweet_academy";

        // hash le password.
        $password_hash = hash('ripemd160', $salt . $password);

        // --------------------------------------------------------------------------------
        $check_email = "SELECT id FROM users WHERE email = :email AND password = :password";

        $match_found = $database->prepare($check_email);

        $match_found->bindParam(':email', $email, PDO::PARAM_STR);

        $match_found->bindParam(':password', $password_hash);


        
        // --------------------------------------------------------------------------------

        if ($match_found->execute()) {
            $row = $match_found->fetch(PDO::FETCH_ASSOC);
            if (is_array($row) && count($row) != 0 && $row != "") {

                return $row;
            } else {
                $error = "L'email ou mot de passe incorrect";
                return $error;
            }
        }

    }

    public function userPage($data){


        $database = $this->connectBD();


        $request = $database->prepare("SELECT id, banner, avatar, email, name, username, birthdate, gender, city, bio, register_date, id_follower, id_following
        FROM users 
        WHERE (id = :id);"
        );        
        $request->bindParam(':id', $data);
        if ($request->execute()){
            $table = $request->fetchAll(PDO::FETCH_ASSOC);
            $success = true;
            $datas = $table;
        } else {
            echo("une erreur c'est produite");
            return "une erreur c'est produite";
        }
        $array["success"] = $success;
        $array["result"] = $datas;
        return $datas;
    }


    public function updateMail($data){
        $database = $this->connectBD();
        $idUser = $data["idUser"];
        $email = $data["email"];
        // $idUser = 7;
        // $mail = "lycaon@hotmail.fr";
        $checkEmail = "SELECT * FROM users WHERE email = :email ";
        $matchFound = $database->prepare($checkEmail);
        $matchFound->bindParam(':email', $email);

        if ($matchFound->execute()){
            $row = $matchFound->fetchAll(PDO::FETCH_ASSOC);
        }

        if (is_array($row) && count($row) == 0 ){
            $request = $database->prepare("UPDATE user
                SET email = :email
                WHERE id = :idUser;"
            );
            $request->bindParam(':idUser', $idUser, PDO::PARAM_INT);
            $request->bindParam(':email', $email);

            if ($request->execute()){
                $table = $request->fetchAll(PDO::FETCH_ASSOC);
                $success = true;
                $data = $table;
            } else {
                echo("une erreur c'est produite");
                return "une erreur c'est produite";
            }
        } else {
            echo("Email déjà utilisé.");
            return "Email déjà utilisé.";
        }
    }

    public function updatePassword($data){
        $database = $this->connectBD();
        $idUser = $data["idUser"];
        $password = $data["password"];
        $salt = "vive le projet tweet_academy";
        $password_hash = hash('ripemd160', $salt . $password);

        $request = $database->prepare("UPDATE users
            SET password = :password
            WHERE id = :idUser;"
        );
        $request->bindParam(':idUser', $idUser, PDO::PARAM_INT);
        $request->bindParam(':password', $password_hash);

        if ($request->execute()){
            $table = $request->fetchAll(PDO::FETCH_ASSOC);
            $success = true;
            $data = $table;
        } else {
            echo("une erreur c'est produite");
            return "une erreur c'est produite";
        }
    }

    public function updateCity($data){
        $database = $this->connectBD();
        $idUser = $data["idUser"];
        $city = $data["city"];

        $request = $database->prepare("UPDATE users
            SET city = :city
            WHERE id = :idUser;"
        );
        $request->bindParam(':city', $city);
        $request->bindParam(':idUser', $idUser);

        if ($request->execute()){
            $table = $request->fetchAll(PDO::FETCH_ASSOC);
            $success = true;
            $data = $table;
        } else {
            echo("une erreur c'est produite");
            return "une erreur c'est produite";
        }
    }

    public function updateUserName($data){
        $database = $this->connectBD();
        $idUser = $data["idUser"];
        $username = $data["username"];
        $request = $database->prepare("UPDATE users
            SET username = :username
            WHERE id = :idUser;"
        );
        $request->bindParam(':idUser', $idUser, PDO::PARAM_INT);
        $request->bindParam(':username', $username);

        if ($request->execute()){
            $table = $request->fetchAll(PDO::FETCH_ASSOC);
            $success = true;
            $data = $table;
        } else {
            echo("une erreur c'est produite");
            return "une erreur c'est produite";
        }      
    }

    public function updateProfilePicture($data){
        $database = $this->connectBD();
        $idUser = $data["idUser"];
        $profilePicture = $data["profilepicture"];
        $request = $database->prepare("UPDATE users
            SET avatar = :profilepicture
            WHERE id = :idUser;"
        );
        $request->bindParam(':idUser', $idUser, PDO::PARAM_INT);
        $request->bindParam(':profilepicture', $profilePicture);

        if ($request->execute()){
            $table = $request->fetchAll(PDO::FETCH_ASSOC);
            $success = true;
            $data = $table;
        } else {
            echo("une erreur c'est produite");
            return "une erreur c'est produite";
        }
    }

    public function updateBanner($data){
        $database = $this->connectBD();
        $idUser = $data["idUser"];
        $banner = $data["banner"];
        $request = $database->prepare("UPDATE users
            SET banner = :banner
            WHERE id = :idUser;"
        );
        $request->bindParam(':idUser', $idUser, PDO::PARAM_INT);
        $request->bindParam(':banner', $banner);

        if ($request->execute()){
            $table = $request->fetchAll(PDO::FETCH_ASSOC);
            $success = true;
            $data = $table;
        } else {
            echo("une erreur c'est produite");
            return "une erreur c'est produite";
        }
    }

    public function updateBio($data){
        $database = $this->connectBD();
        $idUser = $data["idUser"];
        $bio = $data["bio"];
        $request = $database->prepare("UPDATE users
            SET bio = :bio
            WHERE id = :idUser;"
        );
        $request->bindParam(':idUser', $idUser, PDO::PARAM_INT);
        $request->bindParam(':bio', $bio);

        if ($request->execute()){
            $table = $request->fetchAll(PDO::FETCH_ASSOC);
            $success = true;
            $data = $table;
        } else {
            echo("une erreur c'est produite");
            return "une erreur c'est produite";
        }
        
    }

    public function newFollow($data){
        $database = $this->connectBD();
        $idUser = $data["idUser"];
        $idUserFollow = $data["follow"];
        $request = $database->prepare("INSERT INTO users (id_follower, id_following)
            VALUES (:iduser, :idfollow);"
        );
        $request->bindParam(':iduser', $idUser);
        $request->bindParam(':idfollow', $idUserFollow);
        if ($request->execute()) {
            $table = $request->fetchAll(PDO::FETCH_ASSOC);
            $success = true;
            $data = $table;
        } else {
            echo "Nous sommes désolés, une erreur s'est produite.";
            return "Nous sommes désolés, une erreur s'est produite.";
        }
    }

    public function getUserTweets($userid) {
        $database = $this->connectBD();
        $request = $database->prepare("SELECT tweet.message, DATE_FORMAT(tweet.date_send, '%d/%m/%Y') AS 'date', users.name, users.username,tweet.id as 'tweetid', users.id as 'userid' , users.avatar FROM tweet JOIN users ON tweet.id_user = users.id WHERE tweet.id_user = :iduser ORDER BY date_send DESC");
        $request->bindParam("iduser", $userid);
        $request->execute();
        $result = $request->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function getTweetLikesCount($tweetid) {
        $database = $this->connectBD();
        $request = $database->prepare("SELECT COUNT(likes.id_user) as countlikes FROM likes GROUP BY likes.id_tweet HAVING likes.id_tweet = :tweet");
        $request->bindParam(":tweet", $tweetid);
        $request->execute();
        $result = $request->fetch(PDO::FETCH_ASSOC);
        return $result;
    }

    public function getTweetRetweetsCount($tweetid) {
        $database = $this->connectBD();
        $request = $database->prepare("SELECT COUNT(tweet.id_retweet) as countretweets from tweet GROUP BY tweet.id_retweet HAVING tweet.id_retweet = :tweet");
        $request->bindParam("tweet", $tweetid);
        $request->execute();
        $result = $request->fetch(PDO::FETCH_ASSOC);
        return $result;
    }

    public function getTweetCommentsCount($tweetid) {
        $database = $this->connectBD();
        $request = $database->prepare("SELECT COUNT(tweet.id_reply_tweet) as countcomments from tweet GROUP BY tweet.id_reply_tweet HAVING tweet.id_reply_tweet = :tweet");
        $request->bindParam("tweet", $tweetid);
        $request->execute();
        $result = $request->fetch(PDO::FETCH_ASSOC);
        return $result;
    }

    public function getFollower($data){
        $result = "";
        $database = $this->connectBD();
        $id = $data;
        $request = $database->prepare("SELECT id_follower FROM users WHERE id = :id_user");
        $request->bindParam(":id_user", $id);
        $request->execute();
        $result1 = $request->fetch(PDO::FETCH_ASSOC);
        $result1 = $result1["id_follower"];
        $follow = explode(",", $result1);
        foreach($follow as $value){
            $request2 = $database->prepare("SELECT username FROM users WHERE id = :id_follower");
            $request2->bindParam(":id_user", $value);
            $request2->execute();
            $result .= $request->fetch(PDO::FETCH_ASSOC);
        }
        return $result;
    }

    public function searchUser(&$search) {
        $query = "SELECT users.id, users.name, users.username, users.avatar FROM users WHERE username LIKE :username OR name LIKE :name";
        $database = $this->connectBD();
        $search = "%$search%";
        $request = $database->prepare($query);
        $request->bindParam("username", $search);
        $request->bindParam("name", $search);
        $request->execute();
        $result = $request->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function searchTweets(&$search) {
        $query = "SELECT tweet.message, DATE_FORMAT(tweet.date_send, '%d/%m/%Y') AS 'date', users.name, users.username, tweet.id as 'tweetid',users.id as 'userid' , users.avatar FROM tweet JOIN users ON tweet.id_user = users.id WHERE tweet.message LIKE :message";
        $search = "%$search%";
        $database = $this->connectBD();
        $request = $database->prepare($query);
        $request->bindParam("message", $search);
        $request->execute();
        $result = $request->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function allUserData($id) {
        $query = "SELECT id, YEAR(register_date) as 'date' , banner, avatar, name, username, bio, city, id_follower as 'follower', id_following as 'following' FROM users WHERE id LIKE :id";
        $database = $this->connectBD();
        $request = $database->prepare($query);
        $request->bindParam("id", $id);
        $request->execute();
        $result = $request->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function kwak($message, $id) {
        $query = "INSERT into tweet (id_user, message) VALUES (:iduser, :message)";
        $database = $this->connectBD();
        $request = $database->prepare($query);
        $request->bindParam("iduser", $id);
        $request->bindParam("message", $message);
        $request->execute();
    }

    public function rekwak($tweetid, $userid) {

    }

    public function likekwak($tweetid, $userid) {
        $query = "INSERT into likes (id_tweet, id_user) VALUES (:tweetid, :userid)";
        $database = $this->connectBD();
        $request = $database->prepare($query);
        $request->bindParam("userid", $userid);
        $request->bindParam("tweetid", $tweetid);
        $request->execute();
    }
}   




class UserLogResponse
{
    public string $error;
}