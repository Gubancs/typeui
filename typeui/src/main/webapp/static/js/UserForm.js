var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
var UserLabelProvider = (function () {
    function UserLabelProvider() {
    }
    UserLabelProvider.prototype.getLabel = function (user) {
        return user.getName();
    };
    return UserLabelProvider;
})();
var UserDataProvider = (function (_super) {
    __extends(UserDataProvider, _super);
    function UserDataProvider() {
        _super.apply(this, arguments);
    }
    UserDataProvider.prototype.getValue = function (user) {
        return user.getId();
    };
    return UserDataProvider;
})(ListDataProvider);
/**
 *
 * Example form
 */
var UserForm = (function (_super) {
    __extends(UserForm, _super);
    function UserForm(parent) {
        _super.call(this, parent);
        this.setLabelWidth(200);
        this.setLabelAlign(1 /* RIGHT */);
        this.setHttpMethod(0 /* GET */);
        this.setAction("");
        this.setValidateOnBlur(true);
    }
    UserForm.prototype.createComponents = function () {
        var toolkit = new FormToolkit();
        //First name field
        this.firstNameField = new TextField(this);
        this.firstNameField.setName("firstName");
        this.firstNameField.setDisabled(false);
        this.firstNameField.setPlaceholder("Type your firstname");
        this.firstNameField.setFieldLabel("First name");
        //last name field
        this.lastNameField = new TextField(this);
        this.lastNameField.setName("lastName");
        this.lastNameField.setDisabled(false);
        this.lastNameField.setPlaceholder("Type your lastname");
        this.lastNameField.setFieldLabel("Last name");
        //last name field
        this.dateField = new DateField(this);
        this.dateField.setName("birthDate");
        this.dateField.setDisabled(false);
        this.dateField.setPlaceholder("Select your birth date");
        this.dateField.setFieldLabel("Birth date");
        //Gender field
        var genderField = new Combobox(this);
        var dataProvider = new UserDataProvider(this.getDummyUsers());
        genderField.setDataProvider(new EnumDataProvider(Gender));
        genderField.setFieldLabel("Gender");
        //Are you sure?
        this.checkbox = new Checkbox(this);
        this.checkbox.setText("Yes");
        this.checkbox.setName("sure");
        this.checkbox.setFieldLabel("Are you sure");
        //Email field
        this.emailField = new EmailField(this);
        this.emailField.setName("email");
        this.emailField.setFieldLabel("Email");
        this.emailField.setPlaceholder("Type your email");
        //Describe yourself
        var textArea = new TextArea(this);
        textArea.setPlaceholder("Type your email");
        textArea.setDisabled(false);
        textArea.setFieldLabel("Describe yourself");
        _super.prototype.createComponents.call(this);
    };
    UserForm.prototype.initButtons = function (buttonBar) {
        //OK button
        this.okButton = new Button(buttonBar);
        this.okButton.setButtonType(ButtonType.BUTTON);
        this.okButton.setText("Submit");
        this.okButton.addClass("custom-ok-button");
        this.okButton.setIconClass("fa fa-check");
        this.okButton.setIconAlign(IconAlign.LEFT);
        //Cancel button
        this.cancelButton = new Button(buttonBar);
        this.cancelButton.setText("Cancel");
        this.cancelButton.addClass("custom-cancel-button");
    };
    /**
     * Initialize custom event listeners
     */
    UserForm.prototype.initEventListeners = function () {
        _super.prototype.initEventListeners.call(this);
        var form = this;
        this.okButton.on(Button.EVENT_CLICK, this.onButtonClickHandler);
        this.cancelButton.on(Button.EVENT_CLICK, function (e) {
            form.clearValues();
            form.getChildren().get(0).destroy();
        });
        this.checkbox.addChangeListener(function (e) {
            Log.debug("I don't know", e);
        });
        this.firstNameField.addChangeListener(this.firstNameChangeHandler);
        this.lastNameField.addKeyupListener(function (e) {
            Log.debug("Keyup handler", e);
        });
    };
    /**
     * Mouse event click handler for okButton
     *
     * @param {MouseEvent} e
     */
    UserForm.prototype.onButtonClickHandler = function (e) {
        Log.info("On click the button", this);
    };
    UserForm.prototype.firstNameChangeHandler = function (e) {
        Log.info("First name changed", e);
    };
    UserForm.prototype.getDummyUsers = function () {
        var users = new List();
        users.add(new User("1", "Gabor"));
        users.add(new User("2", "Pista"));
        users.add(new User("3", "Péter"));
        users.add(new User("4", "Jolán"));
        users.add(new User("5", "Gabor"));
        users.add(new User("6", "Pista"));
        users.add(new User("7", "Péter"));
        users.add(new User("8", "Jolán"));
        return users;
    };
    return UserForm;
})(Form);
//# sourceMappingURL=UserForm.js.map