import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

const anyClassValueExtractor = (targetObj: any, constraints: any[]) => {
    const [targetProp] = constraints;
    return targetObj[targetProp];
};

export const matchFailMessage = (property: string, targetProp: string) =>
    `The property "${property}" does not match the property "${targetProp}"`;

@ValidatorConstraint({ async: false })
export class MatchesConstraint implements ValidatorConstraintInterface {
    validate(value: unknown, { object, constraints }: ValidationArguments): boolean {
        const targetValue = anyClassValueExtractor(object, constraints);
        return value === targetValue;
    }

    defaultMessage({ property, constraints }: ValidationArguments): string {
        const [targetProp] = constraints;
        return matchFailMessage(property, targetProp);
    }
}

export function Matches(matchTo: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string): void {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [matchTo],
            validator: MatchesConstraint,
        });
    };
}
