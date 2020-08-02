import { expect } from 'chai';
import 'mocha';
import { Matches, matchFailMessage } from '../src';
import { ValidationError, Validator } from 'class-validator';

const validator = new Validator();

describe('Matches validation', () => {
    it('should return an empty errors array if both properties have the same value', () => {
        class Form {
            @Matches('password2')
            password = 'abcd1234';
            password2 = 'abcd1234';
        }

        const form = new Form();
        const errors = validator.validateSync(form);
        expect(errors.length).to.equal(0);
    });

    it('should return an errors array if the properties do not have the same value', () => {
        class Form {
            @Matches('password2')
            password = 'abcd1234';
            password2 = 'abcd12345';
        }

        const form = new Form();
        const errors = validator.validateSync(form);
        console.log('errors', errors);
        expect(errors.length).to.equal(1);
    });

    it('should return proper error message if the properties do not have the same value', () => {
        class Form {
            @Matches('anotherProp')
            prop1 = 'someValue';
            anotherProp = 'anotherValue';
        }

        const form = new Form();
        const error = <ValidationError>validator.validateSync(form).pop();
        const { MatchesConstraint } = error.constraints as { MatchesConstraint: string };
        expect(MatchesConstraint).to.equal(matchFailMessage('prop1', 'anotherProp'));
    });
});
