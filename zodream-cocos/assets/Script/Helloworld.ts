const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Button)
    loginBtn: cc.Button = null;

    @property
    text: string = 'hello';

    onLoad() {
        this.loginBtn.node.on('click', this.login, this);
    }

    start () {
        // init logic
        //this.label.string = this.text;
    }

    login() {
        cc.director.loadScene('play');
    }
}
