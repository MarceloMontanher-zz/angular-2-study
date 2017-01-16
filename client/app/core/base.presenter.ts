import { Subscription } from 'rxjs/Subscription';

export interface BasePresenterContract {
    setComponent(component: any): void;
    unsetComponent(): void;
}

export class BasePresenter {

    protected subscriptions: Subscription[] = [];

    constructor() { }

    unsetComponent() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}