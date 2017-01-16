import { BasePresenterContract } from './base.presenter';

export class BaseComponent<T extends BasePresenterContract> {

    public isLoading: boolean;
    public errorMsg: string;
    public successMsg: string;

    protected defaultErrorMsg: string = 'Problemas para realizar a ação executada, tente novamente.';

    constructor(protected presenter: T) { }

    ngOnInit() {
        this.presenter.setComponent(this);
    }

    ngOnDestroy() {
        this.presenter.unsetComponent();
    }

    showErrorMsg(err: any) {

        this.errorMsg = this.defaultErrorMsg;

        if (err != null) {
            console.log(err.toString());
            this.errorMsg = err.toString();
        }

        if (CLIENT_SIDE) {
            window.scrollTo(0, 0);
        }

        this.hideLoading();
    }

    hideErrorMsg() {
        this.errorMsg = undefined;
    }

    showSuccessMsg(msg: string) {
        this.successMsg = msg;
    }

    hideSuccessMsg() {
        this.successMsg = undefined;
    }

    showLoading() {
        this.isLoading = true;
    }

    hideLoading() {
        // angular-universal is breaking when rendering objects in DOM (a bug which should be fixed in next relesase)
        // in the meantime we have to avoid this bug otherwise the seo does not work
        if (CLIENT_SIDE) {
            this.isLoading = false;
        }
    }
}