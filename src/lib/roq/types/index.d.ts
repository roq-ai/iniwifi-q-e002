/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model customer
 *
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model payment
 *
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>;
/**
 * Model troubleshoot
 *
 */
export type troubleshoot = $Result.DefaultSelection<Prisma.$troubleshootPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model wifi_access
 *
 */
export type wifi_access = $Result.DefaultSelection<Prisma.$wifi_accessPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   */
  get customer(): Prisma.customerDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   */
  get payment(): Prisma.paymentDelegate<ExtArgs>;

  /**
   * `prisma.troubleshoot`: Exposes CRUD operations for the **troubleshoot** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Troubleshoots
   * const troubleshoots = await prisma.troubleshoot.findMany()
   * ```
   */
  get troubleshoot(): Prisma.troubleshootDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.wifi_access`: Exposes CRUD operations for the **wifi_access** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Wifi_accesses
   * const wifi_accesses = await prisma.wifi_access.findMany()
   * ```
   */
  get wifi_access(): Prisma.wifi_accessDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    customer: 'customer';
    organization: 'organization';
    payment: 'payment';
    troubleshoot: 'troubleshoot';
    user: 'user';
    wifi_access: 'wifi_access';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'customer' | 'organization' | 'payment' | 'troubleshoot' | 'user' | 'wifi_access';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>;
        fields: Prisma.customerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[];
          };
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCustomer>;
          };
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CustomerGroupByOutputType>[];
          };
          count: {
            args: Prisma.customerCountArgs<ExtArgs>;
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>;
        fields: Prisma.paymentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[];
          };
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePayment>;
          };
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PaymentGroupByOutputType>[];
          };
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>;
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number;
          };
        };
      };
      troubleshoot: {
        payload: Prisma.$troubleshootPayload<ExtArgs>;
        fields: Prisma.troubleshootFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.troubleshootFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$troubleshootPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.troubleshootFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$troubleshootPayload>;
          };
          findFirst: {
            args: Prisma.troubleshootFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$troubleshootPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.troubleshootFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$troubleshootPayload>;
          };
          findMany: {
            args: Prisma.troubleshootFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$troubleshootPayload>[];
          };
          create: {
            args: Prisma.troubleshootCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$troubleshootPayload>;
          };
          createMany: {
            args: Prisma.troubleshootCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.troubleshootDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$troubleshootPayload>;
          };
          update: {
            args: Prisma.troubleshootUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$troubleshootPayload>;
          };
          deleteMany: {
            args: Prisma.troubleshootDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.troubleshootUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.troubleshootUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$troubleshootPayload>;
          };
          aggregate: {
            args: Prisma.TroubleshootAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTroubleshoot>;
          };
          groupBy: {
            args: Prisma.troubleshootGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TroubleshootGroupByOutputType>[];
          };
          count: {
            args: Prisma.troubleshootCountArgs<ExtArgs>;
            result: $Utils.Optional<TroubleshootCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      wifi_access: {
        payload: Prisma.$wifi_accessPayload<ExtArgs>;
        fields: Prisma.wifi_accessFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.wifi_accessFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$wifi_accessPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.wifi_accessFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$wifi_accessPayload>;
          };
          findFirst: {
            args: Prisma.wifi_accessFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$wifi_accessPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.wifi_accessFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$wifi_accessPayload>;
          };
          findMany: {
            args: Prisma.wifi_accessFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$wifi_accessPayload>[];
          };
          create: {
            args: Prisma.wifi_accessCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$wifi_accessPayload>;
          };
          createMany: {
            args: Prisma.wifi_accessCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.wifi_accessDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$wifi_accessPayload>;
          };
          update: {
            args: Prisma.wifi_accessUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$wifi_accessPayload>;
          };
          deleteMany: {
            args: Prisma.wifi_accessDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.wifi_accessUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.wifi_accessUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$wifi_accessPayload>;
          };
          aggregate: {
            args: Prisma.Wifi_accessAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateWifi_access>;
          };
          groupBy: {
            args: Prisma.wifi_accessGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Wifi_accessGroupByOutputType>[];
          };
          count: {
            args: Prisma.wifi_accessCountArgs<ExtArgs>;
            result: $Utils.Optional<Wifi_accessCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    payment: number;
    troubleshoot: number;
    wifi_access: number;
  };

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | CustomerCountOutputTypeCountPaymentArgs;
    troubleshoot?: boolean | CustomerCountOutputTypeCountTroubleshootArgs;
    wifi_access?: boolean | CustomerCountOutputTypeCountWifi_accessArgs;
  };

  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPaymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: paymentWhereInput;
  };

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTroubleshootArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: troubleshootWhereInput;
  };

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountWifi_accessArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: wifi_accessWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    user: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OrganizationCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: userWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    customer: number;
    payment: number;
    troubleshoot: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserCountOutputTypeCountCustomerArgs;
    payment?: boolean | UserCountOutputTypeCountPaymentArgs;
    troubleshoot?: boolean | UserCountOutputTypeCountTroubleshootArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: customerWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: paymentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTroubleshootArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: troubleshootWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  export type CustomerMinAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    phone_number: string | null;
    address: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerMaxAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    phone_number: string | null;
    address: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerCountAggregateOutputType = {
    id: number;
    first_name: number;
    last_name: number;
    email: number;
    phone_number: number;
    address: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CustomerMinAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    phone_number?: true;
    address?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerMaxAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    phone_number?: true;
    address?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerCountAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    phone_number?: true;
    address?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned customers
     **/
    _count?: true | CustomerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CustomerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CustomerMaxAggregateInputType;
  };

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>;
  };

  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput;
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[];
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum;
    having?: customerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
  };

  export type CustomerGroupByOutputType = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CustomerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
          : GetScalarType<T[P], CustomerGroupByOutputType[P]>;
      }
    >
  >;

  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        first_name?: boolean;
        last_name?: boolean;
        email?: boolean;
        phone_number?: boolean;
        address?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        payment?: boolean | customer$paymentArgs<ExtArgs>;
        troubleshoot?: boolean | customer$troubleshootArgs<ExtArgs>;
        wifi_access?: boolean | customer$wifi_accessArgs<ExtArgs>;
        _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['customer']
    >;

  export type customerSelectScalar = {
    id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    email?: boolean;
    phone_number?: boolean;
    address?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    payment?: boolean | customer$paymentArgs<ExtArgs>;
    troubleshoot?: boolean | customer$troubleshootArgs<ExtArgs>;
    wifi_access?: boolean | customer$wifi_accessArgs<ExtArgs>;
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'customer';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      payment: Prisma.$paymentPayload<ExtArgs>[];
      troubleshoot: Prisma.$troubleshootPayload<ExtArgs>[];
      wifi_access: Prisma.$wifi_accessPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        address: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['customer']
    >;
    composites: {};
  };

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<
    Prisma.$customerPayload,
    S
  >;

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    customerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CustomerCountAggregateInputType | true;
  };

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer']; meta: { name: 'customer' } };
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends customerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends customerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     *
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends customerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     *
     **/
    create<T extends customerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, customerCreateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Customers.
     *     @param {customerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends customerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     *
     **/
    delete<T extends customerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, customerDeleteArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends customerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends customerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends customerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     **/
    upsert<T extends customerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpsertArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
     **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CustomerAggregateArgs>(
      args: Subset<T, CustomerAggregateArgs>,
    ): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the customer model
     */
    readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    payment<T extends customer$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, customer$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    troubleshoot<T extends customer$troubleshootArgs<ExtArgs> = {}>(
      args?: Subset<T, customer$troubleshootArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$troubleshootPayload<ExtArgs>, T, 'findMany'> | Null>;

    wifi_access<T extends customer$wifi_accessArgs<ExtArgs> = {}>(
      args?: Subset<T, customer$wifi_accessArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wifi_accessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<'customer', 'String'>;
    readonly first_name: FieldRef<'customer', 'String'>;
    readonly last_name: FieldRef<'customer', 'String'>;
    readonly email: FieldRef<'customer', 'String'>;
    readonly phone_number: FieldRef<'customer', 'String'>;
    readonly address: FieldRef<'customer', 'String'>;
    readonly user_id: FieldRef<'customer', 'String'>;
    readonly created_at: FieldRef<'customer', 'DateTime'>;
    readonly updated_at: FieldRef<'customer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>;
  };

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>;
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput;
  };

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput;
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>;
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
  };

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput;
  };

  /**
   * customer.payment
   */
  export type customer$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    cursor?: paymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * customer.troubleshoot
   */
  export type customer$troubleshootArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the troubleshoot
     */
    select?: troubleshootSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: troubleshootInclude<ExtArgs> | null;
    where?: troubleshootWhereInput;
    orderBy?: troubleshootOrderByWithRelationInput | troubleshootOrderByWithRelationInput[];
    cursor?: troubleshootWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TroubleshootScalarFieldEnum | TroubleshootScalarFieldEnum[];
  };

  /**
   * customer.wifi_access
   */
  export type customer$wifi_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wifi_access
     */
    select?: wifi_accessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wifi_accessInclude<ExtArgs> | null;
    where?: wifi_accessWhereInput;
    orderBy?: wifi_accessOrderByWithRelationInput | wifi_accessOrderByWithRelationInput[];
    cursor?: wifi_accessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Wifi_accessScalarFieldEnum | Wifi_accessScalarFieldEnum[];
  };

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | organization$userArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | organization$userArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends organization$userArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.user
   */
  export type organization$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  export type PaymentAvgAggregateOutputType = {
    amount: number | null;
  };

  export type PaymentSumAggregateOutputType = {
    amount: number | null;
  };

  export type PaymentMinAggregateOutputType = {
    id: string | null;
    amount: number | null;
    payment_date: Date | null;
    payment_method: string | null;
    customer_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PaymentMaxAggregateOutputType = {
    id: string | null;
    amount: number | null;
    payment_date: Date | null;
    payment_method: string | null;
    customer_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PaymentCountAggregateOutputType = {
    id: number;
    amount: number;
    payment_date: number;
    payment_method: number;
    customer_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PaymentAvgAggregateInputType = {
    amount?: true;
  };

  export type PaymentSumAggregateInputType = {
    amount?: true;
  };

  export type PaymentMinAggregateInputType = {
    id?: true;
    amount?: true;
    payment_date?: true;
    payment_method?: true;
    customer_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PaymentMaxAggregateInputType = {
    id?: true;
    amount?: true;
    payment_date?: true;
    payment_method?: true;
    customer_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PaymentCountAggregateInputType = {
    id?: true;
    amount?: true;
    payment_date?: true;
    payment_method?: true;
    customer_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned payments
     **/
    _count?: true | PaymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentMaxAggregateInputType;
  };

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>;
  };

  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[];
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum;
    having?: paymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
  };

  export type PaymentGroupByOutputType = {
    id: string;
    amount: number;
    payment_date: Date;
    payment_method: string;
    customer_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PaymentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
          : GetScalarType<T[P], PaymentGroupByOutputType[P]>;
      }
    >
  >;

  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      amount?: boolean;
      payment_date?: boolean;
      payment_method?: boolean;
      customer_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      customer?: boolean | customerDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type paymentSelectScalar = {
    id?: boolean;
    amount?: boolean;
    payment_date?: boolean;
    payment_method?: boolean;
    customer_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'payment';
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        amount: number;
        payment_date: Date;
        payment_method: string;
        customer_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['payment']
    >;
    composites: {};
  };

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<
    Prisma.$paymentPayload,
    S
  >;

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    paymentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PaymentCountAggregateInputType | true;
  };

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment']; meta: { name: 'payment' } };
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends paymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__paymentClient<
      $Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends paymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends paymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     **/
    create<T extends paymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentCreateArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Payments.
     *     @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends paymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     **/
    delete<T extends paymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends paymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends paymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends paymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     **/
    upsert<T extends paymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
     **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PaymentAggregateArgs>(
      args: Subset<T, PaymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the payment model
     */
    readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends customerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, customerDefaultArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly id: FieldRef<'payment', 'String'>;
    readonly amount: FieldRef<'payment', 'Int'>;
    readonly payment_date: FieldRef<'payment', 'DateTime'>;
    readonly payment_method: FieldRef<'payment', 'String'>;
    readonly customer_id: FieldRef<'payment', 'String'>;
    readonly user_id: FieldRef<'payment', 'String'>;
    readonly created_at: FieldRef<'payment', 'DateTime'>;
    readonly updated_at: FieldRef<'payment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>;
  };

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>;
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>;
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput;
  };

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput;
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>;
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>;
  };

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput;
  };

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
  };

  /**
   * Model troubleshoot
   */

  export type AggregateTroubleshoot = {
    _count: TroubleshootCountAggregateOutputType | null;
    _min: TroubleshootMinAggregateOutputType | null;
    _max: TroubleshootMaxAggregateOutputType | null;
  };

  export type TroubleshootMinAggregateOutputType = {
    id: string | null;
    issue_description: string | null;
    resolution: string | null;
    resolved_by: string | null;
    customer_id: string | null;
    resolution_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TroubleshootMaxAggregateOutputType = {
    id: string | null;
    issue_description: string | null;
    resolution: string | null;
    resolved_by: string | null;
    customer_id: string | null;
    resolution_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TroubleshootCountAggregateOutputType = {
    id: number;
    issue_description: number;
    resolution: number;
    resolved_by: number;
    customer_id: number;
    resolution_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TroubleshootMinAggregateInputType = {
    id?: true;
    issue_description?: true;
    resolution?: true;
    resolved_by?: true;
    customer_id?: true;
    resolution_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TroubleshootMaxAggregateInputType = {
    id?: true;
    issue_description?: true;
    resolution?: true;
    resolved_by?: true;
    customer_id?: true;
    resolution_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TroubleshootCountAggregateInputType = {
    id?: true;
    issue_description?: true;
    resolution?: true;
    resolved_by?: true;
    customer_id?: true;
    resolution_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TroubleshootAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which troubleshoot to aggregate.
     */
    where?: troubleshootWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of troubleshoots to fetch.
     */
    orderBy?: troubleshootOrderByWithRelationInput | troubleshootOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: troubleshootWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` troubleshoots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` troubleshoots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned troubleshoots
     **/
    _count?: true | TroubleshootCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TroubleshootMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TroubleshootMaxAggregateInputType;
  };

  export type GetTroubleshootAggregateType<T extends TroubleshootAggregateArgs> = {
    [P in keyof T & keyof AggregateTroubleshoot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTroubleshoot[P]>
      : GetScalarType<T[P], AggregateTroubleshoot[P]>;
  };

  export type troubleshootGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: troubleshootWhereInput;
    orderBy?: troubleshootOrderByWithAggregationInput | troubleshootOrderByWithAggregationInput[];
    by: TroubleshootScalarFieldEnum[] | TroubleshootScalarFieldEnum;
    having?: troubleshootScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TroubleshootCountAggregateInputType | true;
    _min?: TroubleshootMinAggregateInputType;
    _max?: TroubleshootMaxAggregateInputType;
  };

  export type TroubleshootGroupByOutputType = {
    id: string;
    issue_description: string;
    resolution: string;
    resolved_by: string;
    customer_id: string;
    resolution_date: Date;
    created_at: Date;
    updated_at: Date;
    _count: TroubleshootCountAggregateOutputType | null;
    _min: TroubleshootMinAggregateOutputType | null;
    _max: TroubleshootMaxAggregateOutputType | null;
  };

  type GetTroubleshootGroupByPayload<T extends troubleshootGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TroubleshootGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TroubleshootGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TroubleshootGroupByOutputType[P]>
          : GetScalarType<T[P], TroubleshootGroupByOutputType[P]>;
      }
    >
  >;

  export type troubleshootSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        issue_description?: boolean;
        resolution?: boolean;
        resolved_by?: boolean;
        customer_id?: boolean;
        resolution_date?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        customer?: boolean | customerDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['troubleshoot']
    >;

  export type troubleshootSelectScalar = {
    id?: boolean;
    issue_description?: boolean;
    resolution?: boolean;
    resolved_by?: boolean;
    customer_id?: boolean;
    resolution_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type troubleshootInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $troubleshootPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'troubleshoot';
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        issue_description: string;
        resolution: string;
        resolved_by: string;
        customer_id: string;
        resolution_date: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['troubleshoot']
    >;
    composites: {};
  };

  type troubleshootGetPayload<S extends boolean | null | undefined | troubleshootDefaultArgs> = $Result.GetResult<
    Prisma.$troubleshootPayload,
    S
  >;

  type troubleshootCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    troubleshootFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TroubleshootCountAggregateInputType | true;
  };

  export interface troubleshootDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['troubleshoot']; meta: { name: 'troubleshoot' } };
    /**
     * Find zero or one Troubleshoot that matches the filter.
     * @param {troubleshootFindUniqueArgs} args - Arguments to find a Troubleshoot
     * @example
     * // Get one Troubleshoot
     * const troubleshoot = await prisma.troubleshoot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends troubleshootFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, troubleshootFindUniqueArgs<ExtArgs>>,
    ): Prisma__troubleshootClient<
      $Result.GetResult<Prisma.$troubleshootPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Troubleshoot that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {troubleshootFindUniqueOrThrowArgs} args - Arguments to find a Troubleshoot
     * @example
     * // Get one Troubleshoot
     * const troubleshoot = await prisma.troubleshoot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends troubleshootFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, troubleshootFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__troubleshootClient<
      $Result.GetResult<Prisma.$troubleshootPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Troubleshoot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {troubleshootFindFirstArgs} args - Arguments to find a Troubleshoot
     * @example
     * // Get one Troubleshoot
     * const troubleshoot = await prisma.troubleshoot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends troubleshootFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, troubleshootFindFirstArgs<ExtArgs>>,
    ): Prisma__troubleshootClient<
      $Result.GetResult<Prisma.$troubleshootPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Troubleshoot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {troubleshootFindFirstOrThrowArgs} args - Arguments to find a Troubleshoot
     * @example
     * // Get one Troubleshoot
     * const troubleshoot = await prisma.troubleshoot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends troubleshootFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, troubleshootFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__troubleshootClient<
      $Result.GetResult<Prisma.$troubleshootPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Troubleshoots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {troubleshootFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Troubleshoots
     * const troubleshoots = await prisma.troubleshoot.findMany()
     *
     * // Get first 10 Troubleshoots
     * const troubleshoots = await prisma.troubleshoot.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const troubleshootWithIdOnly = await prisma.troubleshoot.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends troubleshootFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, troubleshootFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$troubleshootPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Troubleshoot.
     * @param {troubleshootCreateArgs} args - Arguments to create a Troubleshoot.
     * @example
     * // Create one Troubleshoot
     * const Troubleshoot = await prisma.troubleshoot.create({
     *   data: {
     *     // ... data to create a Troubleshoot
     *   }
     * })
     *
     **/
    create<T extends troubleshootCreateArgs<ExtArgs>>(
      args: SelectSubset<T, troubleshootCreateArgs<ExtArgs>>,
    ): Prisma__troubleshootClient<$Result.GetResult<Prisma.$troubleshootPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Troubleshoots.
     *     @param {troubleshootCreateManyArgs} args - Arguments to create many Troubleshoots.
     *     @example
     *     // Create many Troubleshoots
     *     const troubleshoot = await prisma.troubleshoot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends troubleshootCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, troubleshootCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Troubleshoot.
     * @param {troubleshootDeleteArgs} args - Arguments to delete one Troubleshoot.
     * @example
     * // Delete one Troubleshoot
     * const Troubleshoot = await prisma.troubleshoot.delete({
     *   where: {
     *     // ... filter to delete one Troubleshoot
     *   }
     * })
     *
     **/
    delete<T extends troubleshootDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, troubleshootDeleteArgs<ExtArgs>>,
    ): Prisma__troubleshootClient<$Result.GetResult<Prisma.$troubleshootPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Troubleshoot.
     * @param {troubleshootUpdateArgs} args - Arguments to update one Troubleshoot.
     * @example
     * // Update one Troubleshoot
     * const troubleshoot = await prisma.troubleshoot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends troubleshootUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, troubleshootUpdateArgs<ExtArgs>>,
    ): Prisma__troubleshootClient<$Result.GetResult<Prisma.$troubleshootPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Troubleshoots.
     * @param {troubleshootDeleteManyArgs} args - Arguments to filter Troubleshoots to delete.
     * @example
     * // Delete a few Troubleshoots
     * const { count } = await prisma.troubleshoot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends troubleshootDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, troubleshootDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Troubleshoots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {troubleshootUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Troubleshoots
     * const troubleshoot = await prisma.troubleshoot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends troubleshootUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, troubleshootUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Troubleshoot.
     * @param {troubleshootUpsertArgs} args - Arguments to update or create a Troubleshoot.
     * @example
     * // Update or create a Troubleshoot
     * const troubleshoot = await prisma.troubleshoot.upsert({
     *   create: {
     *     // ... data to create a Troubleshoot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Troubleshoot we want to update
     *   }
     * })
     **/
    upsert<T extends troubleshootUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, troubleshootUpsertArgs<ExtArgs>>,
    ): Prisma__troubleshootClient<$Result.GetResult<Prisma.$troubleshootPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Troubleshoots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {troubleshootCountArgs} args - Arguments to filter Troubleshoots to count.
     * @example
     * // Count the number of Troubleshoots
     * const count = await prisma.troubleshoot.count({
     *   where: {
     *     // ... the filter for the Troubleshoots we want to count
     *   }
     * })
     **/
    count<T extends troubleshootCountArgs>(
      args?: Subset<T, troubleshootCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TroubleshootCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Troubleshoot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TroubleshootAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TroubleshootAggregateArgs>(
      args: Subset<T, TroubleshootAggregateArgs>,
    ): Prisma.PrismaPromise<GetTroubleshootAggregateType<T>>;

    /**
     * Group by Troubleshoot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {troubleshootGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends troubleshootGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: troubleshootGroupByArgs['orderBy'] }
        : { orderBy?: troubleshootGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, troubleshootGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTroubleshootGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the troubleshoot model
     */
    readonly fields: troubleshootFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for troubleshoot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__troubleshootClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends customerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, customerDefaultArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the troubleshoot model
   */
  interface troubleshootFieldRefs {
    readonly id: FieldRef<'troubleshoot', 'String'>;
    readonly issue_description: FieldRef<'troubleshoot', 'String'>;
    readonly resolution: FieldRef<'troubleshoot', 'String'>;
    readonly resolved_by: FieldRef<'troubleshoot', 'String'>;
    readonly customer_id: FieldRef<'troubleshoot', 'String'>;
    readonly resolution_date: FieldRef<'troubleshoot', 'DateTime'>;
    readonly created_at: FieldRef<'troubleshoot', 'DateTime'>;
    readonly updated_at: FieldRef<'troubleshoot', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * troubleshoot findUnique
   */
  export type troubleshootFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the troubleshoot
     */
    select?: troubleshootSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: troubleshootInclude<ExtArgs> | null;
    /**
     * Filter, which troubleshoot to fetch.
     */
    where: troubleshootWhereUniqueInput;
  };

  /**
   * troubleshoot findUniqueOrThrow
   */
  export type troubleshootFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the troubleshoot
     */
    select?: troubleshootSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: troubleshootInclude<ExtArgs> | null;
    /**
     * Filter, which troubleshoot to fetch.
     */
    where: troubleshootWhereUniqueInput;
  };

  /**
   * troubleshoot findFirst
   */
  export type troubleshootFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the troubleshoot
     */
    select?: troubleshootSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: troubleshootInclude<ExtArgs> | null;
    /**
     * Filter, which troubleshoot to fetch.
     */
    where?: troubleshootWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of troubleshoots to fetch.
     */
    orderBy?: troubleshootOrderByWithRelationInput | troubleshootOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for troubleshoots.
     */
    cursor?: troubleshootWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` troubleshoots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` troubleshoots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of troubleshoots.
     */
    distinct?: TroubleshootScalarFieldEnum | TroubleshootScalarFieldEnum[];
  };

  /**
   * troubleshoot findFirstOrThrow
   */
  export type troubleshootFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the troubleshoot
     */
    select?: troubleshootSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: troubleshootInclude<ExtArgs> | null;
    /**
     * Filter, which troubleshoot to fetch.
     */
    where?: troubleshootWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of troubleshoots to fetch.
     */
    orderBy?: troubleshootOrderByWithRelationInput | troubleshootOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for troubleshoots.
     */
    cursor?: troubleshootWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` troubleshoots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` troubleshoots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of troubleshoots.
     */
    distinct?: TroubleshootScalarFieldEnum | TroubleshootScalarFieldEnum[];
  };

  /**
   * troubleshoot findMany
   */
  export type troubleshootFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the troubleshoot
     */
    select?: troubleshootSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: troubleshootInclude<ExtArgs> | null;
    /**
     * Filter, which troubleshoots to fetch.
     */
    where?: troubleshootWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of troubleshoots to fetch.
     */
    orderBy?: troubleshootOrderByWithRelationInput | troubleshootOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing troubleshoots.
     */
    cursor?: troubleshootWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` troubleshoots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` troubleshoots.
     */
    skip?: number;
    distinct?: TroubleshootScalarFieldEnum | TroubleshootScalarFieldEnum[];
  };

  /**
   * troubleshoot create
   */
  export type troubleshootCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the troubleshoot
     */
    select?: troubleshootSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: troubleshootInclude<ExtArgs> | null;
    /**
     * The data needed to create a troubleshoot.
     */
    data: XOR<troubleshootCreateInput, troubleshootUncheckedCreateInput>;
  };

  /**
   * troubleshoot createMany
   */
  export type troubleshootCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many troubleshoots.
     */
    data: troubleshootCreateManyInput | troubleshootCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * troubleshoot update
   */
  export type troubleshootUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the troubleshoot
     */
    select?: troubleshootSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: troubleshootInclude<ExtArgs> | null;
    /**
     * The data needed to update a troubleshoot.
     */
    data: XOR<troubleshootUpdateInput, troubleshootUncheckedUpdateInput>;
    /**
     * Choose, which troubleshoot to update.
     */
    where: troubleshootWhereUniqueInput;
  };

  /**
   * troubleshoot updateMany
   */
  export type troubleshootUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update troubleshoots.
     */
    data: XOR<troubleshootUpdateManyMutationInput, troubleshootUncheckedUpdateManyInput>;
    /**
     * Filter which troubleshoots to update
     */
    where?: troubleshootWhereInput;
  };

  /**
   * troubleshoot upsert
   */
  export type troubleshootUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the troubleshoot
     */
    select?: troubleshootSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: troubleshootInclude<ExtArgs> | null;
    /**
     * The filter to search for the troubleshoot to update in case it exists.
     */
    where: troubleshootWhereUniqueInput;
    /**
     * In case the troubleshoot found by the `where` argument doesn't exist, create a new troubleshoot with this data.
     */
    create: XOR<troubleshootCreateInput, troubleshootUncheckedCreateInput>;
    /**
     * In case the troubleshoot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<troubleshootUpdateInput, troubleshootUncheckedUpdateInput>;
  };

  /**
   * troubleshoot delete
   */
  export type troubleshootDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the troubleshoot
     */
    select?: troubleshootSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: troubleshootInclude<ExtArgs> | null;
    /**
     * Filter which troubleshoot to delete.
     */
    where: troubleshootWhereUniqueInput;
  };

  /**
   * troubleshoot deleteMany
   */
  export type troubleshootDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which troubleshoots to delete
     */
    where?: troubleshootWhereInput;
  };

  /**
   * troubleshoot without action
   */
  export type troubleshootDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the troubleshoot
     */
    select?: troubleshootSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: troubleshootInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    organization_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      organization_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      customer?: boolean | user$customerArgs<ExtArgs>;
      payment?: boolean | user$paymentArgs<ExtArgs>;
      troubleshoot?: boolean | user$troubleshootArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    organization_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | user$customerArgs<ExtArgs>;
    payment?: boolean | user$paymentArgs<ExtArgs>;
    troubleshoot?: boolean | user$troubleshootArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>[];
      payment: Prisma.$paymentPayload<ExtArgs>[];
      troubleshoot: Prisma.$troubleshootPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        organization_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends user$customerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$customerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'> | Null>;

    payment<T extends user$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    troubleshoot<T extends user$troubleshootArgs<ExtArgs> = {}>(
      args?: Subset<T, user$troubleshootArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$troubleshootPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly organization_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.customer
   */
  export type user$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    where?: customerWhereInput;
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    cursor?: customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * user.payment
   */
  export type user$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    cursor?: paymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * user.troubleshoot
   */
  export type user$troubleshootArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the troubleshoot
     */
    select?: troubleshootSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: troubleshootInclude<ExtArgs> | null;
    where?: troubleshootWhereInput;
    orderBy?: troubleshootOrderByWithRelationInput | troubleshootOrderByWithRelationInput[];
    cursor?: troubleshootWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TroubleshootScalarFieldEnum | TroubleshootScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model wifi_access
   */

  export type AggregateWifi_access = {
    _count: Wifi_accessCountAggregateOutputType | null;
    _min: Wifi_accessMinAggregateOutputType | null;
    _max: Wifi_accessMaxAggregateOutputType | null;
  };

  export type Wifi_accessMinAggregateOutputType = {
    id: string | null;
    ssid: string | null;
    password: string | null;
    expiry_date: Date | null;
    customer_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Wifi_accessMaxAggregateOutputType = {
    id: string | null;
    ssid: string | null;
    password: string | null;
    expiry_date: Date | null;
    customer_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Wifi_accessCountAggregateOutputType = {
    id: number;
    ssid: number;
    password: number;
    expiry_date: number;
    customer_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Wifi_accessMinAggregateInputType = {
    id?: true;
    ssid?: true;
    password?: true;
    expiry_date?: true;
    customer_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Wifi_accessMaxAggregateInputType = {
    id?: true;
    ssid?: true;
    password?: true;
    expiry_date?: true;
    customer_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Wifi_accessCountAggregateInputType = {
    id?: true;
    ssid?: true;
    password?: true;
    expiry_date?: true;
    customer_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Wifi_accessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wifi_access to aggregate.
     */
    where?: wifi_accessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wifi_accesses to fetch.
     */
    orderBy?: wifi_accessOrderByWithRelationInput | wifi_accessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: wifi_accessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wifi_accesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wifi_accesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned wifi_accesses
     **/
    _count?: true | Wifi_accessCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Wifi_accessMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Wifi_accessMaxAggregateInputType;
  };

  export type GetWifi_accessAggregateType<T extends Wifi_accessAggregateArgs> = {
    [P in keyof T & keyof AggregateWifi_access]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWifi_access[P]>
      : GetScalarType<T[P], AggregateWifi_access[P]>;
  };

  export type wifi_accessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wifi_accessWhereInput;
    orderBy?: wifi_accessOrderByWithAggregationInput | wifi_accessOrderByWithAggregationInput[];
    by: Wifi_accessScalarFieldEnum[] | Wifi_accessScalarFieldEnum;
    having?: wifi_accessScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Wifi_accessCountAggregateInputType | true;
    _min?: Wifi_accessMinAggregateInputType;
    _max?: Wifi_accessMaxAggregateInputType;
  };

  export type Wifi_accessGroupByOutputType = {
    id: string;
    ssid: string;
    password: string;
    expiry_date: Date;
    customer_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Wifi_accessCountAggregateOutputType | null;
    _min: Wifi_accessMinAggregateOutputType | null;
    _max: Wifi_accessMaxAggregateOutputType | null;
  };

  type GetWifi_accessGroupByPayload<T extends wifi_accessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Wifi_accessGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Wifi_accessGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Wifi_accessGroupByOutputType[P]>
          : GetScalarType<T[P], Wifi_accessGroupByOutputType[P]>;
      }
    >
  >;

  export type wifi_accessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        ssid?: boolean;
        password?: boolean;
        expiry_date?: boolean;
        customer_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        customer?: boolean | customerDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['wifi_access']
    >;

  export type wifi_accessSelectScalar = {
    id?: boolean;
    ssid?: boolean;
    password?: boolean;
    expiry_date?: boolean;
    customer_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type wifi_accessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>;
  };

  export type $wifi_accessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'wifi_access';
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        ssid: string;
        password: string;
        expiry_date: Date;
        customer_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['wifi_access']
    >;
    composites: {};
  };

  type wifi_accessGetPayload<S extends boolean | null | undefined | wifi_accessDefaultArgs> = $Result.GetResult<
    Prisma.$wifi_accessPayload,
    S
  >;

  type wifi_accessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    wifi_accessFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Wifi_accessCountAggregateInputType | true;
  };

  export interface wifi_accessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wifi_access']; meta: { name: 'wifi_access' } };
    /**
     * Find zero or one Wifi_access that matches the filter.
     * @param {wifi_accessFindUniqueArgs} args - Arguments to find a Wifi_access
     * @example
     * // Get one Wifi_access
     * const wifi_access = await prisma.wifi_access.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends wifi_accessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, wifi_accessFindUniqueArgs<ExtArgs>>,
    ): Prisma__wifi_accessClient<
      $Result.GetResult<Prisma.$wifi_accessPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Wifi_access that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {wifi_accessFindUniqueOrThrowArgs} args - Arguments to find a Wifi_access
     * @example
     * // Get one Wifi_access
     * const wifi_access = await prisma.wifi_access.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends wifi_accessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, wifi_accessFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__wifi_accessClient<
      $Result.GetResult<Prisma.$wifi_accessPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Wifi_access that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wifi_accessFindFirstArgs} args - Arguments to find a Wifi_access
     * @example
     * // Get one Wifi_access
     * const wifi_access = await prisma.wifi_access.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends wifi_accessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, wifi_accessFindFirstArgs<ExtArgs>>,
    ): Prisma__wifi_accessClient<
      $Result.GetResult<Prisma.$wifi_accessPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Wifi_access that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wifi_accessFindFirstOrThrowArgs} args - Arguments to find a Wifi_access
     * @example
     * // Get one Wifi_access
     * const wifi_access = await prisma.wifi_access.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends wifi_accessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, wifi_accessFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__wifi_accessClient<
      $Result.GetResult<Prisma.$wifi_accessPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Wifi_accesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wifi_accessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wifi_accesses
     * const wifi_accesses = await prisma.wifi_access.findMany()
     *
     * // Get first 10 Wifi_accesses
     * const wifi_accesses = await prisma.wifi_access.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const wifi_accessWithIdOnly = await prisma.wifi_access.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends wifi_accessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, wifi_accessFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wifi_accessPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Wifi_access.
     * @param {wifi_accessCreateArgs} args - Arguments to create a Wifi_access.
     * @example
     * // Create one Wifi_access
     * const Wifi_access = await prisma.wifi_access.create({
     *   data: {
     *     // ... data to create a Wifi_access
     *   }
     * })
     *
     **/
    create<T extends wifi_accessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, wifi_accessCreateArgs<ExtArgs>>,
    ): Prisma__wifi_accessClient<$Result.GetResult<Prisma.$wifi_accessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Wifi_accesses.
     *     @param {wifi_accessCreateManyArgs} args - Arguments to create many Wifi_accesses.
     *     @example
     *     // Create many Wifi_accesses
     *     const wifi_access = await prisma.wifi_access.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends wifi_accessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, wifi_accessCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Wifi_access.
     * @param {wifi_accessDeleteArgs} args - Arguments to delete one Wifi_access.
     * @example
     * // Delete one Wifi_access
     * const Wifi_access = await prisma.wifi_access.delete({
     *   where: {
     *     // ... filter to delete one Wifi_access
     *   }
     * })
     *
     **/
    delete<T extends wifi_accessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, wifi_accessDeleteArgs<ExtArgs>>,
    ): Prisma__wifi_accessClient<$Result.GetResult<Prisma.$wifi_accessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Wifi_access.
     * @param {wifi_accessUpdateArgs} args - Arguments to update one Wifi_access.
     * @example
     * // Update one Wifi_access
     * const wifi_access = await prisma.wifi_access.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends wifi_accessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, wifi_accessUpdateArgs<ExtArgs>>,
    ): Prisma__wifi_accessClient<$Result.GetResult<Prisma.$wifi_accessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Wifi_accesses.
     * @param {wifi_accessDeleteManyArgs} args - Arguments to filter Wifi_accesses to delete.
     * @example
     * // Delete a few Wifi_accesses
     * const { count } = await prisma.wifi_access.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends wifi_accessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, wifi_accessDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Wifi_accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wifi_accessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wifi_accesses
     * const wifi_access = await prisma.wifi_access.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends wifi_accessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, wifi_accessUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Wifi_access.
     * @param {wifi_accessUpsertArgs} args - Arguments to update or create a Wifi_access.
     * @example
     * // Update or create a Wifi_access
     * const wifi_access = await prisma.wifi_access.upsert({
     *   create: {
     *     // ... data to create a Wifi_access
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wifi_access we want to update
     *   }
     * })
     **/
    upsert<T extends wifi_accessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, wifi_accessUpsertArgs<ExtArgs>>,
    ): Prisma__wifi_accessClient<$Result.GetResult<Prisma.$wifi_accessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Wifi_accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wifi_accessCountArgs} args - Arguments to filter Wifi_accesses to count.
     * @example
     * // Count the number of Wifi_accesses
     * const count = await prisma.wifi_access.count({
     *   where: {
     *     // ... the filter for the Wifi_accesses we want to count
     *   }
     * })
     **/
    count<T extends wifi_accessCountArgs>(
      args?: Subset<T, wifi_accessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wifi_accessCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Wifi_access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wifi_accessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Wifi_accessAggregateArgs>(
      args: Subset<T, Wifi_accessAggregateArgs>,
    ): Prisma.PrismaPromise<GetWifi_accessAggregateType<T>>;

    /**
     * Group by Wifi_access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wifi_accessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends wifi_accessGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: wifi_accessGroupByArgs['orderBy'] }
        : { orderBy?: wifi_accessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, wifi_accessGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetWifi_accessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the wifi_access model
     */
    readonly fields: wifi_accessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wifi_access.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__wifi_accessClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends customerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, customerDefaultArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the wifi_access model
   */
  interface wifi_accessFieldRefs {
    readonly id: FieldRef<'wifi_access', 'String'>;
    readonly ssid: FieldRef<'wifi_access', 'String'>;
    readonly password: FieldRef<'wifi_access', 'String'>;
    readonly expiry_date: FieldRef<'wifi_access', 'DateTime'>;
    readonly customer_id: FieldRef<'wifi_access', 'String'>;
    readonly created_at: FieldRef<'wifi_access', 'DateTime'>;
    readonly updated_at: FieldRef<'wifi_access', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * wifi_access findUnique
   */
  export type wifi_accessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wifi_access
     */
    select?: wifi_accessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wifi_accessInclude<ExtArgs> | null;
    /**
     * Filter, which wifi_access to fetch.
     */
    where: wifi_accessWhereUniqueInput;
  };

  /**
   * wifi_access findUniqueOrThrow
   */
  export type wifi_accessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wifi_access
     */
    select?: wifi_accessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wifi_accessInclude<ExtArgs> | null;
    /**
     * Filter, which wifi_access to fetch.
     */
    where: wifi_accessWhereUniqueInput;
  };

  /**
   * wifi_access findFirst
   */
  export type wifi_accessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wifi_access
     */
    select?: wifi_accessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wifi_accessInclude<ExtArgs> | null;
    /**
     * Filter, which wifi_access to fetch.
     */
    where?: wifi_accessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wifi_accesses to fetch.
     */
    orderBy?: wifi_accessOrderByWithRelationInput | wifi_accessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wifi_accesses.
     */
    cursor?: wifi_accessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wifi_accesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wifi_accesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wifi_accesses.
     */
    distinct?: Wifi_accessScalarFieldEnum | Wifi_accessScalarFieldEnum[];
  };

  /**
   * wifi_access findFirstOrThrow
   */
  export type wifi_accessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wifi_access
     */
    select?: wifi_accessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wifi_accessInclude<ExtArgs> | null;
    /**
     * Filter, which wifi_access to fetch.
     */
    where?: wifi_accessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wifi_accesses to fetch.
     */
    orderBy?: wifi_accessOrderByWithRelationInput | wifi_accessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wifi_accesses.
     */
    cursor?: wifi_accessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wifi_accesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wifi_accesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wifi_accesses.
     */
    distinct?: Wifi_accessScalarFieldEnum | Wifi_accessScalarFieldEnum[];
  };

  /**
   * wifi_access findMany
   */
  export type wifi_accessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wifi_access
     */
    select?: wifi_accessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wifi_accessInclude<ExtArgs> | null;
    /**
     * Filter, which wifi_accesses to fetch.
     */
    where?: wifi_accessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wifi_accesses to fetch.
     */
    orderBy?: wifi_accessOrderByWithRelationInput | wifi_accessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing wifi_accesses.
     */
    cursor?: wifi_accessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wifi_accesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wifi_accesses.
     */
    skip?: number;
    distinct?: Wifi_accessScalarFieldEnum | Wifi_accessScalarFieldEnum[];
  };

  /**
   * wifi_access create
   */
  export type wifi_accessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wifi_access
     */
    select?: wifi_accessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wifi_accessInclude<ExtArgs> | null;
    /**
     * The data needed to create a wifi_access.
     */
    data: XOR<wifi_accessCreateInput, wifi_accessUncheckedCreateInput>;
  };

  /**
   * wifi_access createMany
   */
  export type wifi_accessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wifi_accesses.
     */
    data: wifi_accessCreateManyInput | wifi_accessCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * wifi_access update
   */
  export type wifi_accessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wifi_access
     */
    select?: wifi_accessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wifi_accessInclude<ExtArgs> | null;
    /**
     * The data needed to update a wifi_access.
     */
    data: XOR<wifi_accessUpdateInput, wifi_accessUncheckedUpdateInput>;
    /**
     * Choose, which wifi_access to update.
     */
    where: wifi_accessWhereUniqueInput;
  };

  /**
   * wifi_access updateMany
   */
  export type wifi_accessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wifi_accesses.
     */
    data: XOR<wifi_accessUpdateManyMutationInput, wifi_accessUncheckedUpdateManyInput>;
    /**
     * Filter which wifi_accesses to update
     */
    where?: wifi_accessWhereInput;
  };

  /**
   * wifi_access upsert
   */
  export type wifi_accessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wifi_access
     */
    select?: wifi_accessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wifi_accessInclude<ExtArgs> | null;
    /**
     * The filter to search for the wifi_access to update in case it exists.
     */
    where: wifi_accessWhereUniqueInput;
    /**
     * In case the wifi_access found by the `where` argument doesn't exist, create a new wifi_access with this data.
     */
    create: XOR<wifi_accessCreateInput, wifi_accessUncheckedCreateInput>;
    /**
     * In case the wifi_access was found with the provided `where` argument, update it with this data.
     */
    update: XOR<wifi_accessUpdateInput, wifi_accessUncheckedUpdateInput>;
  };

  /**
   * wifi_access delete
   */
  export type wifi_accessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wifi_access
     */
    select?: wifi_accessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wifi_accessInclude<ExtArgs> | null;
    /**
     * Filter which wifi_access to delete.
     */
    where: wifi_accessWhereUniqueInput;
  };

  /**
   * wifi_access deleteMany
   */
  export type wifi_accessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wifi_accesses to delete
     */
    where?: wifi_accessWhereInput;
  };

  /**
   * wifi_access without action
   */
  export type wifi_accessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wifi_access
     */
    select?: wifi_accessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wifi_accessInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CustomerScalarFieldEnum: {
    id: 'id';
    first_name: 'first_name';
    last_name: 'last_name';
    email: 'email';
    phone_number: 'phone_number';
    address: 'address';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const PaymentScalarFieldEnum: {
    id: 'id';
    amount: 'amount';
    payment_date: 'payment_date';
    payment_method: 'payment_method';
    customer_id: 'customer_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];

  export const TroubleshootScalarFieldEnum: {
    id: 'id';
    issue_description: 'issue_description';
    resolution: 'resolution';
    resolved_by: 'resolved_by';
    customer_id: 'customer_id';
    resolution_date: 'resolution_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TroubleshootScalarFieldEnum =
    (typeof TroubleshootScalarFieldEnum)[keyof typeof TroubleshootScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    organization_id: 'organization_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const Wifi_accessScalarFieldEnum: {
    id: 'id';
    ssid: 'ssid';
    password: 'password';
    expiry_date: 'expiry_date';
    customer_id: 'customer_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Wifi_accessScalarFieldEnum = (typeof Wifi_accessScalarFieldEnum)[keyof typeof Wifi_accessScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[];
    OR?: customerWhereInput[];
    NOT?: customerWhereInput | customerWhereInput[];
    id?: UuidFilter<'customer'> | string;
    first_name?: StringFilter<'customer'> | string;
    last_name?: StringFilter<'customer'> | string;
    email?: StringFilter<'customer'> | string;
    phone_number?: StringFilter<'customer'> | string;
    address?: StringFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    payment?: PaymentListRelationFilter;
    troubleshoot?: TroubleshootListRelationFilter;
    wifi_access?: Wifi_accessListRelationFilter;
  };

  export type customerOrderByWithRelationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    payment?: paymentOrderByRelationAggregateInput;
    troubleshoot?: troubleshootOrderByRelationAggregateInput;
    wifi_access?: wifi_accessOrderByRelationAggregateInput;
  };

  export type customerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: customerWhereInput | customerWhereInput[];
      OR?: customerWhereInput[];
      NOT?: customerWhereInput | customerWhereInput[];
      first_name?: StringFilter<'customer'> | string;
      last_name?: StringFilter<'customer'> | string;
      email?: StringFilter<'customer'> | string;
      phone_number?: StringFilter<'customer'> | string;
      address?: StringFilter<'customer'> | string;
      user_id?: UuidFilter<'customer'> | string;
      created_at?: DateTimeFilter<'customer'> | Date | string;
      updated_at?: DateTimeFilter<'customer'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      payment?: PaymentListRelationFilter;
      troubleshoot?: TroubleshootListRelationFilter;
      wifi_access?: Wifi_accessListRelationFilter;
    },
    'id'
  >;

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: customerCountOrderByAggregateInput;
    _max?: customerMaxOrderByAggregateInput;
    _min?: customerMinOrderByAggregateInput;
  };

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    OR?: customerScalarWhereWithAggregatesInput[];
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'customer'> | string;
    first_name?: StringWithAggregatesFilter<'customer'> | string;
    last_name?: StringWithAggregatesFilter<'customer'> | string;
    email?: StringWithAggregatesFilter<'customer'> | string;
    phone_number?: StringWithAggregatesFilter<'customer'> | string;
    address?: StringWithAggregatesFilter<'customer'> | string;
    user_id?: UuidWithAggregatesFilter<'customer'> | string;
    created_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
  };

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[];
    OR?: paymentWhereInput[];
    NOT?: paymentWhereInput | paymentWhereInput[];
    id?: UuidFilter<'payment'> | string;
    amount?: IntFilter<'payment'> | number;
    payment_date?: DateTimeFilter<'payment'> | Date | string;
    payment_method?: StringFilter<'payment'> | string;
    customer_id?: UuidFilter<'payment'> | string;
    user_id?: UuidFilter<'payment'> | string;
    created_at?: DateTimeFilter<'payment'> | Date | string;
    updated_at?: DateTimeFilter<'payment'> | Date | string;
    customer?: XOR<CustomerRelationFilter, customerWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type paymentOrderByWithRelationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    payment_date?: SortOrder;
    payment_method?: SortOrder;
    customer_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    customer?: customerOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type paymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: paymentWhereInput | paymentWhereInput[];
      OR?: paymentWhereInput[];
      NOT?: paymentWhereInput | paymentWhereInput[];
      amount?: IntFilter<'payment'> | number;
      payment_date?: DateTimeFilter<'payment'> | Date | string;
      payment_method?: StringFilter<'payment'> | string;
      customer_id?: UuidFilter<'payment'> | string;
      user_id?: UuidFilter<'payment'> | string;
      created_at?: DateTimeFilter<'payment'> | Date | string;
      updated_at?: DateTimeFilter<'payment'> | Date | string;
      customer?: XOR<CustomerRelationFilter, customerWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type paymentOrderByWithAggregationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    payment_date?: SortOrder;
    payment_method?: SortOrder;
    customer_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: paymentCountOrderByAggregateInput;
    _avg?: paymentAvgOrderByAggregateInput;
    _max?: paymentMaxOrderByAggregateInput;
    _min?: paymentMinOrderByAggregateInput;
    _sum?: paymentSumOrderByAggregateInput;
  };

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[];
    OR?: paymentScalarWhereWithAggregatesInput[];
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'payment'> | string;
    amount?: IntWithAggregatesFilter<'payment'> | number;
    payment_date?: DateTimeWithAggregatesFilter<'payment'> | Date | string;
    payment_method?: StringWithAggregatesFilter<'payment'> | string;
    customer_id?: UuidWithAggregatesFilter<'payment'> | string;
    user_id?: UuidWithAggregatesFilter<'payment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'payment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'payment'> | Date | string;
  };

  export type troubleshootWhereInput = {
    AND?: troubleshootWhereInput | troubleshootWhereInput[];
    OR?: troubleshootWhereInput[];
    NOT?: troubleshootWhereInput | troubleshootWhereInput[];
    id?: UuidFilter<'troubleshoot'> | string;
    issue_description?: StringFilter<'troubleshoot'> | string;
    resolution?: StringFilter<'troubleshoot'> | string;
    resolved_by?: UuidFilter<'troubleshoot'> | string;
    customer_id?: UuidFilter<'troubleshoot'> | string;
    resolution_date?: DateTimeFilter<'troubleshoot'> | Date | string;
    created_at?: DateTimeFilter<'troubleshoot'> | Date | string;
    updated_at?: DateTimeFilter<'troubleshoot'> | Date | string;
    customer?: XOR<CustomerRelationFilter, customerWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type troubleshootOrderByWithRelationInput = {
    id?: SortOrder;
    issue_description?: SortOrder;
    resolution?: SortOrder;
    resolved_by?: SortOrder;
    customer_id?: SortOrder;
    resolution_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    customer?: customerOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type troubleshootWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: troubleshootWhereInput | troubleshootWhereInput[];
      OR?: troubleshootWhereInput[];
      NOT?: troubleshootWhereInput | troubleshootWhereInput[];
      issue_description?: StringFilter<'troubleshoot'> | string;
      resolution?: StringFilter<'troubleshoot'> | string;
      resolved_by?: UuidFilter<'troubleshoot'> | string;
      customer_id?: UuidFilter<'troubleshoot'> | string;
      resolution_date?: DateTimeFilter<'troubleshoot'> | Date | string;
      created_at?: DateTimeFilter<'troubleshoot'> | Date | string;
      updated_at?: DateTimeFilter<'troubleshoot'> | Date | string;
      customer?: XOR<CustomerRelationFilter, customerWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type troubleshootOrderByWithAggregationInput = {
    id?: SortOrder;
    issue_description?: SortOrder;
    resolution?: SortOrder;
    resolved_by?: SortOrder;
    customer_id?: SortOrder;
    resolution_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: troubleshootCountOrderByAggregateInput;
    _max?: troubleshootMaxOrderByAggregateInput;
    _min?: troubleshootMinOrderByAggregateInput;
  };

  export type troubleshootScalarWhereWithAggregatesInput = {
    AND?: troubleshootScalarWhereWithAggregatesInput | troubleshootScalarWhereWithAggregatesInput[];
    OR?: troubleshootScalarWhereWithAggregatesInput[];
    NOT?: troubleshootScalarWhereWithAggregatesInput | troubleshootScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'troubleshoot'> | string;
    issue_description?: StringWithAggregatesFilter<'troubleshoot'> | string;
    resolution?: StringWithAggregatesFilter<'troubleshoot'> | string;
    resolved_by?: UuidWithAggregatesFilter<'troubleshoot'> | string;
    customer_id?: UuidWithAggregatesFilter<'troubleshoot'> | string;
    resolution_date?: DateTimeWithAggregatesFilter<'troubleshoot'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'troubleshoot'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'troubleshoot'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    organization_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    customer?: CustomerListRelationFilter;
    payment?: PaymentListRelationFilter;
    troubleshoot?: TroubleshootListRelationFilter;
    organization?: XOR<OrganizationNullableRelationFilter, organizationWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    customer?: customerOrderByRelationAggregateInput;
    payment?: paymentOrderByRelationAggregateInput;
    troubleshoot?: troubleshootOrderByRelationAggregateInput;
    organization?: organizationOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      organization_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      customer?: CustomerListRelationFilter;
      payment?: PaymentListRelationFilter;
      troubleshoot?: TroubleshootListRelationFilter;
      organization?: XOR<OrganizationNullableRelationFilter, organizationWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    organization_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type wifi_accessWhereInput = {
    AND?: wifi_accessWhereInput | wifi_accessWhereInput[];
    OR?: wifi_accessWhereInput[];
    NOT?: wifi_accessWhereInput | wifi_accessWhereInput[];
    id?: UuidFilter<'wifi_access'> | string;
    ssid?: StringFilter<'wifi_access'> | string;
    password?: StringFilter<'wifi_access'> | string;
    expiry_date?: DateTimeFilter<'wifi_access'> | Date | string;
    customer_id?: UuidFilter<'wifi_access'> | string;
    created_at?: DateTimeFilter<'wifi_access'> | Date | string;
    updated_at?: DateTimeFilter<'wifi_access'> | Date | string;
    customer?: XOR<CustomerRelationFilter, customerWhereInput>;
  };

  export type wifi_accessOrderByWithRelationInput = {
    id?: SortOrder;
    ssid?: SortOrder;
    password?: SortOrder;
    expiry_date?: SortOrder;
    customer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    customer?: customerOrderByWithRelationInput;
  };

  export type wifi_accessWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: wifi_accessWhereInput | wifi_accessWhereInput[];
      OR?: wifi_accessWhereInput[];
      NOT?: wifi_accessWhereInput | wifi_accessWhereInput[];
      ssid?: StringFilter<'wifi_access'> | string;
      password?: StringFilter<'wifi_access'> | string;
      expiry_date?: DateTimeFilter<'wifi_access'> | Date | string;
      customer_id?: UuidFilter<'wifi_access'> | string;
      created_at?: DateTimeFilter<'wifi_access'> | Date | string;
      updated_at?: DateTimeFilter<'wifi_access'> | Date | string;
      customer?: XOR<CustomerRelationFilter, customerWhereInput>;
    },
    'id'
  >;

  export type wifi_accessOrderByWithAggregationInput = {
    id?: SortOrder;
    ssid?: SortOrder;
    password?: SortOrder;
    expiry_date?: SortOrder;
    customer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: wifi_accessCountOrderByAggregateInput;
    _max?: wifi_accessMaxOrderByAggregateInput;
    _min?: wifi_accessMinOrderByAggregateInput;
  };

  export type wifi_accessScalarWhereWithAggregatesInput = {
    AND?: wifi_accessScalarWhereWithAggregatesInput | wifi_accessScalarWhereWithAggregatesInput[];
    OR?: wifi_accessScalarWhereWithAggregatesInput[];
    NOT?: wifi_accessScalarWhereWithAggregatesInput | wifi_accessScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'wifi_access'> | string;
    ssid?: StringWithAggregatesFilter<'wifi_access'> | string;
    password?: StringWithAggregatesFilter<'wifi_access'> | string;
    expiry_date?: DateTimeWithAggregatesFilter<'wifi_access'> | Date | string;
    customer_id?: UuidWithAggregatesFilter<'wifi_access'> | string;
    created_at?: DateTimeWithAggregatesFilter<'wifi_access'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'wifi_access'> | Date | string;
  };

  export type customerCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomerInput;
    payment?: paymentCreateNestedManyWithoutCustomerInput;
    troubleshoot?: troubleshootCreateNestedManyWithoutCustomerInput;
    wifi_access?: wifi_accessCreateNestedManyWithoutCustomerInput;
  };

  export type customerUncheckedCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutCustomerInput;
    troubleshoot?: troubleshootUncheckedCreateNestedManyWithoutCustomerInput;
    wifi_access?: wifi_accessUncheckedCreateNestedManyWithoutCustomerInput;
  };

  export type customerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
    payment?: paymentUpdateManyWithoutCustomerNestedInput;
    troubleshoot?: troubleshootUpdateManyWithoutCustomerNestedInput;
    wifi_access?: wifi_accessUpdateManyWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutCustomerNestedInput;
    troubleshoot?: troubleshootUncheckedUpdateManyWithoutCustomerNestedInput;
    wifi_access?: wifi_accessUncheckedUpdateManyWithoutCustomerNestedInput;
  };

  export type customerCreateManyInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentCreateInput = {
    id?: string;
    amount: number;
    payment_date: Date | string;
    payment_method: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: customerCreateNestedOneWithoutPaymentInput;
    user: userCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateInput = {
    id?: string;
    amount: number;
    payment_date: Date | string;
    payment_method: string;
    customer_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateOneRequiredWithoutPaymentNestedInput;
    user?: userUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentCreateManyInput = {
    id?: string;
    amount: number;
    payment_date: Date | string;
    payment_method: string;
    customer_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type troubleshootCreateInput = {
    id?: string;
    issue_description: string;
    resolution: string;
    resolution_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: customerCreateNestedOneWithoutTroubleshootInput;
    user: userCreateNestedOneWithoutTroubleshootInput;
  };

  export type troubleshootUncheckedCreateInput = {
    id?: string;
    issue_description: string;
    resolution: string;
    resolved_by: string;
    customer_id: string;
    resolution_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type troubleshootUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    resolution?: StringFieldUpdateOperationsInput | string;
    resolution_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateOneRequiredWithoutTroubleshootNestedInput;
    user?: userUpdateOneRequiredWithoutTroubleshootNestedInput;
  };

  export type troubleshootUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    resolution?: StringFieldUpdateOperationsInput | string;
    resolved_by?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    resolution_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type troubleshootCreateManyInput = {
    id?: string;
    issue_description: string;
    resolution: string;
    resolved_by: string;
    customer_id: string;
    resolution_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type troubleshootUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    resolution?: StringFieldUpdateOperationsInput | string;
    resolution_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type troubleshootUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    resolution?: StringFieldUpdateOperationsInput | string;
    resolved_by?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    resolution_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
    troubleshoot?: troubleshootCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
    troubleshoot?: troubleshootUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
    troubleshoot?: troubleshootUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
    troubleshoot?: troubleshootUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type wifi_accessCreateInput = {
    id?: string;
    ssid: string;
    password: string;
    expiry_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: customerCreateNestedOneWithoutWifi_accessInput;
  };

  export type wifi_accessUncheckedCreateInput = {
    id?: string;
    ssid: string;
    password: string;
    expiry_date: Date | string;
    customer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type wifi_accessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ssid?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateOneRequiredWithoutWifi_accessNestedInput;
  };

  export type wifi_accessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ssid?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type wifi_accessCreateManyInput = {
    id?: string;
    ssid: string;
    password: string;
    expiry_date: Date | string;
    customer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type wifi_accessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ssid?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type wifi_accessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ssid?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput;
    some?: paymentWhereInput;
    none?: paymentWhereInput;
  };

  export type TroubleshootListRelationFilter = {
    every?: troubleshootWhereInput;
    some?: troubleshootWhereInput;
    none?: troubleshootWhereInput;
  };

  export type Wifi_accessListRelationFilter = {
    every?: wifi_accessWhereInput;
    some?: wifi_accessWhereInput;
    none?: wifi_accessWhereInput;
  };

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type troubleshootOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type wifi_accessOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type CustomerRelationFilter = {
    is?: customerWhereInput;
    isNot?: customerWhereInput;
  };

  export type paymentCountOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    payment_date?: SortOrder;
    payment_method?: SortOrder;
    customer_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type paymentMaxOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    payment_date?: SortOrder;
    payment_method?: SortOrder;
    customer_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentMinOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    payment_date?: SortOrder;
    payment_method?: SortOrder;
    customer_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type troubleshootCountOrderByAggregateInput = {
    id?: SortOrder;
    issue_description?: SortOrder;
    resolution?: SortOrder;
    resolved_by?: SortOrder;
    customer_id?: SortOrder;
    resolution_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type troubleshootMaxOrderByAggregateInput = {
    id?: SortOrder;
    issue_description?: SortOrder;
    resolution?: SortOrder;
    resolved_by?: SortOrder;
    customer_id?: SortOrder;
    resolution_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type troubleshootMinOrderByAggregateInput = {
    id?: SortOrder;
    issue_description?: SortOrder;
    resolution?: SortOrder;
    resolved_by?: SortOrder;
    customer_id?: SortOrder;
    resolution_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type CustomerListRelationFilter = {
    every?: customerWhereInput;
    some?: customerWhereInput;
    none?: customerWhereInput;
  };

  export type OrganizationNullableRelationFilter = {
    is?: organizationWhereInput | null;
    isNot?: organizationWhereInput | null;
  };

  export type customerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type wifi_accessCountOrderByAggregateInput = {
    id?: SortOrder;
    ssid?: SortOrder;
    password?: SortOrder;
    expiry_date?: SortOrder;
    customer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type wifi_accessMaxOrderByAggregateInput = {
    id?: SortOrder;
    ssid?: SortOrder;
    password?: SortOrder;
    expiry_date?: SortOrder;
    customer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type wifi_accessMinOrderByAggregateInput = {
    id?: SortOrder;
    ssid?: SortOrder;
    password?: SortOrder;
    expiry_date?: SortOrder;
    customer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCustomerInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    connect?: userWhereUniqueInput;
  };

  export type paymentCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput>
      | paymentCreateWithoutCustomerInput[]
      | paymentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutCustomerInput | paymentCreateOrConnectWithoutCustomerInput[];
    createMany?: paymentCreateManyCustomerInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type troubleshootCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<troubleshootCreateWithoutCustomerInput, troubleshootUncheckedCreateWithoutCustomerInput>
      | troubleshootCreateWithoutCustomerInput[]
      | troubleshootUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | troubleshootCreateOrConnectWithoutCustomerInput
      | troubleshootCreateOrConnectWithoutCustomerInput[];
    createMany?: troubleshootCreateManyCustomerInputEnvelope;
    connect?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
  };

  export type wifi_accessCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<wifi_accessCreateWithoutCustomerInput, wifi_accessUncheckedCreateWithoutCustomerInput>
      | wifi_accessCreateWithoutCustomerInput[]
      | wifi_accessUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: wifi_accessCreateOrConnectWithoutCustomerInput | wifi_accessCreateOrConnectWithoutCustomerInput[];
    createMany?: wifi_accessCreateManyCustomerInputEnvelope;
    connect?: wifi_accessWhereUniqueInput | wifi_accessWhereUniqueInput[];
  };

  export type paymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput>
      | paymentCreateWithoutCustomerInput[]
      | paymentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutCustomerInput | paymentCreateOrConnectWithoutCustomerInput[];
    createMany?: paymentCreateManyCustomerInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type troubleshootUncheckedCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<troubleshootCreateWithoutCustomerInput, troubleshootUncheckedCreateWithoutCustomerInput>
      | troubleshootCreateWithoutCustomerInput[]
      | troubleshootUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | troubleshootCreateOrConnectWithoutCustomerInput
      | troubleshootCreateOrConnectWithoutCustomerInput[];
    createMany?: troubleshootCreateManyCustomerInputEnvelope;
    connect?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
  };

  export type wifi_accessUncheckedCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<wifi_accessCreateWithoutCustomerInput, wifi_accessUncheckedCreateWithoutCustomerInput>
      | wifi_accessCreateWithoutCustomerInput[]
      | wifi_accessUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: wifi_accessCreateOrConnectWithoutCustomerInput | wifi_accessCreateOrConnectWithoutCustomerInput[];
    createMany?: wifi_accessCreateManyCustomerInputEnvelope;
    connect?: wifi_accessWhereUniqueInput | wifi_accessWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    upsert?: userUpsertWithoutCustomerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCustomerInput, userUpdateWithoutCustomerInput>,
      userUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type paymentUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput>
      | paymentCreateWithoutCustomerInput[]
      | paymentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutCustomerInput | paymentCreateOrConnectWithoutCustomerInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutCustomerInput | paymentUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: paymentCreateManyCustomerInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutCustomerInput | paymentUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutCustomerInput | paymentUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type troubleshootUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<troubleshootCreateWithoutCustomerInput, troubleshootUncheckedCreateWithoutCustomerInput>
      | troubleshootCreateWithoutCustomerInput[]
      | troubleshootUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | troubleshootCreateOrConnectWithoutCustomerInput
      | troubleshootCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | troubleshootUpsertWithWhereUniqueWithoutCustomerInput
      | troubleshootUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: troubleshootCreateManyCustomerInputEnvelope;
    set?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    disconnect?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    delete?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    connect?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    update?:
      | troubleshootUpdateWithWhereUniqueWithoutCustomerInput
      | troubleshootUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | troubleshootUpdateManyWithWhereWithoutCustomerInput
      | troubleshootUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: troubleshootScalarWhereInput | troubleshootScalarWhereInput[];
  };

  export type wifi_accessUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<wifi_accessCreateWithoutCustomerInput, wifi_accessUncheckedCreateWithoutCustomerInput>
      | wifi_accessCreateWithoutCustomerInput[]
      | wifi_accessUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: wifi_accessCreateOrConnectWithoutCustomerInput | wifi_accessCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | wifi_accessUpsertWithWhereUniqueWithoutCustomerInput
      | wifi_accessUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: wifi_accessCreateManyCustomerInputEnvelope;
    set?: wifi_accessWhereUniqueInput | wifi_accessWhereUniqueInput[];
    disconnect?: wifi_accessWhereUniqueInput | wifi_accessWhereUniqueInput[];
    delete?: wifi_accessWhereUniqueInput | wifi_accessWhereUniqueInput[];
    connect?: wifi_accessWhereUniqueInput | wifi_accessWhereUniqueInput[];
    update?:
      | wifi_accessUpdateWithWhereUniqueWithoutCustomerInput
      | wifi_accessUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | wifi_accessUpdateManyWithWhereWithoutCustomerInput
      | wifi_accessUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: wifi_accessScalarWhereInput | wifi_accessScalarWhereInput[];
  };

  export type paymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput>
      | paymentCreateWithoutCustomerInput[]
      | paymentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutCustomerInput | paymentCreateOrConnectWithoutCustomerInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutCustomerInput | paymentUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: paymentCreateManyCustomerInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutCustomerInput | paymentUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutCustomerInput | paymentUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type troubleshootUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<troubleshootCreateWithoutCustomerInput, troubleshootUncheckedCreateWithoutCustomerInput>
      | troubleshootCreateWithoutCustomerInput[]
      | troubleshootUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | troubleshootCreateOrConnectWithoutCustomerInput
      | troubleshootCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | troubleshootUpsertWithWhereUniqueWithoutCustomerInput
      | troubleshootUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: troubleshootCreateManyCustomerInputEnvelope;
    set?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    disconnect?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    delete?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    connect?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    update?:
      | troubleshootUpdateWithWhereUniqueWithoutCustomerInput
      | troubleshootUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | troubleshootUpdateManyWithWhereWithoutCustomerInput
      | troubleshootUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: troubleshootScalarWhereInput | troubleshootScalarWhereInput[];
  };

  export type wifi_accessUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<wifi_accessCreateWithoutCustomerInput, wifi_accessUncheckedCreateWithoutCustomerInput>
      | wifi_accessCreateWithoutCustomerInput[]
      | wifi_accessUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: wifi_accessCreateOrConnectWithoutCustomerInput | wifi_accessCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | wifi_accessUpsertWithWhereUniqueWithoutCustomerInput
      | wifi_accessUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: wifi_accessCreateManyCustomerInputEnvelope;
    set?: wifi_accessWhereUniqueInput | wifi_accessWhereUniqueInput[];
    disconnect?: wifi_accessWhereUniqueInput | wifi_accessWhereUniqueInput[];
    delete?: wifi_accessWhereUniqueInput | wifi_accessWhereUniqueInput[];
    connect?: wifi_accessWhereUniqueInput | wifi_accessWhereUniqueInput[];
    update?:
      | wifi_accessUpdateWithWhereUniqueWithoutCustomerInput
      | wifi_accessUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | wifi_accessUpdateManyWithWhereWithoutCustomerInput
      | wifi_accessUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: wifi_accessScalarWhereInput | wifi_accessScalarWhereInput[];
  };

  export type userCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    upsert?: userUpsertWithWhereUniqueWithoutOrganizationInput | userUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutOrganizationInput | userUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: userUpdateManyWithWhereWithoutOrganizationInput | userUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    upsert?: userUpsertWithWhereUniqueWithoutOrganizationInput | userUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutOrganizationInput | userUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: userUpdateManyWithWhereWithoutOrganizationInput | userUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type customerCreateNestedOneWithoutPaymentInput = {
    create?: XOR<customerCreateWithoutPaymentInput, customerUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: customerCreateOrConnectWithoutPaymentInput;
    connect?: customerWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPaymentInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput;
    connect?: userWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type customerUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<customerCreateWithoutPaymentInput, customerUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: customerCreateOrConnectWithoutPaymentInput;
    upsert?: customerUpsertWithoutPaymentInput;
    connect?: customerWhereUniqueInput;
    update?: XOR<
      XOR<customerUpdateToOneWithWhereWithoutPaymentInput, customerUpdateWithoutPaymentInput>,
      customerUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type userUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput;
    upsert?: userUpsertWithoutPaymentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPaymentInput, userUpdateWithoutPaymentInput>,
      userUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type customerCreateNestedOneWithoutTroubleshootInput = {
    create?: XOR<customerCreateWithoutTroubleshootInput, customerUncheckedCreateWithoutTroubleshootInput>;
    connectOrCreate?: customerCreateOrConnectWithoutTroubleshootInput;
    connect?: customerWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTroubleshootInput = {
    create?: XOR<userCreateWithoutTroubleshootInput, userUncheckedCreateWithoutTroubleshootInput>;
    connectOrCreate?: userCreateOrConnectWithoutTroubleshootInput;
    connect?: userWhereUniqueInput;
  };

  export type customerUpdateOneRequiredWithoutTroubleshootNestedInput = {
    create?: XOR<customerCreateWithoutTroubleshootInput, customerUncheckedCreateWithoutTroubleshootInput>;
    connectOrCreate?: customerCreateOrConnectWithoutTroubleshootInput;
    upsert?: customerUpsertWithoutTroubleshootInput;
    connect?: customerWhereUniqueInput;
    update?: XOR<
      XOR<customerUpdateToOneWithWhereWithoutTroubleshootInput, customerUpdateWithoutTroubleshootInput>,
      customerUncheckedUpdateWithoutTroubleshootInput
    >;
  };

  export type userUpdateOneRequiredWithoutTroubleshootNestedInput = {
    create?: XOR<userCreateWithoutTroubleshootInput, userUncheckedCreateWithoutTroubleshootInput>;
    connectOrCreate?: userCreateOrConnectWithoutTroubleshootInput;
    upsert?: userUpsertWithoutTroubleshootInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTroubleshootInput, userUpdateWithoutTroubleshootInput>,
      userUncheckedUpdateWithoutTroubleshootInput
    >;
  };

  export type customerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type paymentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type troubleshootCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<troubleshootCreateWithoutUserInput, troubleshootUncheckedCreateWithoutUserInput>
      | troubleshootCreateWithoutUserInput[]
      | troubleshootUncheckedCreateWithoutUserInput[];
    connectOrCreate?: troubleshootCreateOrConnectWithoutUserInput | troubleshootCreateOrConnectWithoutUserInput[];
    createMany?: troubleshootCreateManyUserInputEnvelope;
    connect?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
  };

  export type organizationCreateNestedOneWithoutUserInput = {
    create?: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput;
    connect?: organizationWhereUniqueInput;
  };

  export type customerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type paymentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type troubleshootUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<troubleshootCreateWithoutUserInput, troubleshootUncheckedCreateWithoutUserInput>
      | troubleshootCreateWithoutUserInput[]
      | troubleshootUncheckedCreateWithoutUserInput[];
    connectOrCreate?: troubleshootCreateOrConnectWithoutUserInput | troubleshootCreateOrConnectWithoutUserInput[];
    createMany?: troubleshootCreateManyUserInputEnvelope;
    connect?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
  };

  export type customerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type paymentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type troubleshootUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<troubleshootCreateWithoutUserInput, troubleshootUncheckedCreateWithoutUserInput>
      | troubleshootCreateWithoutUserInput[]
      | troubleshootUncheckedCreateWithoutUserInput[];
    connectOrCreate?: troubleshootCreateOrConnectWithoutUserInput | troubleshootCreateOrConnectWithoutUserInput[];
    upsert?: troubleshootUpsertWithWhereUniqueWithoutUserInput | troubleshootUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: troubleshootCreateManyUserInputEnvelope;
    set?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    disconnect?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    delete?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    connect?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    update?: troubleshootUpdateWithWhereUniqueWithoutUserInput | troubleshootUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: troubleshootUpdateManyWithWhereWithoutUserInput | troubleshootUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: troubleshootScalarWhereInput | troubleshootScalarWhereInput[];
  };

  export type organizationUpdateOneWithoutUserNestedInput = {
    create?: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput;
    upsert?: organizationUpsertWithoutUserInput;
    disconnect?: organizationWhereInput | boolean;
    delete?: organizationWhereInput | boolean;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutUserInput, organizationUpdateWithoutUserInput>,
      organizationUncheckedUpdateWithoutUserInput
    >;
  };

  export type customerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type paymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type troubleshootUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<troubleshootCreateWithoutUserInput, troubleshootUncheckedCreateWithoutUserInput>
      | troubleshootCreateWithoutUserInput[]
      | troubleshootUncheckedCreateWithoutUserInput[];
    connectOrCreate?: troubleshootCreateOrConnectWithoutUserInput | troubleshootCreateOrConnectWithoutUserInput[];
    upsert?: troubleshootUpsertWithWhereUniqueWithoutUserInput | troubleshootUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: troubleshootCreateManyUserInputEnvelope;
    set?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    disconnect?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    delete?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    connect?: troubleshootWhereUniqueInput | troubleshootWhereUniqueInput[];
    update?: troubleshootUpdateWithWhereUniqueWithoutUserInput | troubleshootUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: troubleshootUpdateManyWithWhereWithoutUserInput | troubleshootUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: troubleshootScalarWhereInput | troubleshootScalarWhereInput[];
  };

  export type customerCreateNestedOneWithoutWifi_accessInput = {
    create?: XOR<customerCreateWithoutWifi_accessInput, customerUncheckedCreateWithoutWifi_accessInput>;
    connectOrCreate?: customerCreateOrConnectWithoutWifi_accessInput;
    connect?: customerWhereUniqueInput;
  };

  export type customerUpdateOneRequiredWithoutWifi_accessNestedInput = {
    create?: XOR<customerCreateWithoutWifi_accessInput, customerUncheckedCreateWithoutWifi_accessInput>;
    connectOrCreate?: customerCreateOrConnectWithoutWifi_accessInput;
    upsert?: customerUpsertWithoutWifi_accessInput;
    connect?: customerWhereUniqueInput;
    update?: XOR<
      XOR<customerUpdateToOneWithWhereWithoutWifi_accessInput, customerUpdateWithoutWifi_accessInput>,
      customerUncheckedUpdateWithoutWifi_accessInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentCreateNestedManyWithoutUserInput;
    troubleshoot?: troubleshootCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
    troubleshoot?: troubleshootUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCustomerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
  };

  export type paymentCreateWithoutCustomerInput = {
    id?: string;
    amount: number;
    payment_date: Date | string;
    payment_method: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateWithoutCustomerInput = {
    id?: string;
    amount: number;
    payment_date: Date | string;
    payment_method: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentCreateOrConnectWithoutCustomerInput = {
    where: paymentWhereUniqueInput;
    create: XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput>;
  };

  export type paymentCreateManyCustomerInputEnvelope = {
    data: paymentCreateManyCustomerInput | paymentCreateManyCustomerInput[];
    skipDuplicates?: boolean;
  };

  export type troubleshootCreateWithoutCustomerInput = {
    id?: string;
    issue_description: string;
    resolution: string;
    resolution_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTroubleshootInput;
  };

  export type troubleshootUncheckedCreateWithoutCustomerInput = {
    id?: string;
    issue_description: string;
    resolution: string;
    resolved_by: string;
    resolution_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type troubleshootCreateOrConnectWithoutCustomerInput = {
    where: troubleshootWhereUniqueInput;
    create: XOR<troubleshootCreateWithoutCustomerInput, troubleshootUncheckedCreateWithoutCustomerInput>;
  };

  export type troubleshootCreateManyCustomerInputEnvelope = {
    data: troubleshootCreateManyCustomerInput | troubleshootCreateManyCustomerInput[];
    skipDuplicates?: boolean;
  };

  export type wifi_accessCreateWithoutCustomerInput = {
    id?: string;
    ssid: string;
    password: string;
    expiry_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type wifi_accessUncheckedCreateWithoutCustomerInput = {
    id?: string;
    ssid: string;
    password: string;
    expiry_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type wifi_accessCreateOrConnectWithoutCustomerInput = {
    where: wifi_accessWhereUniqueInput;
    create: XOR<wifi_accessCreateWithoutCustomerInput, wifi_accessUncheckedCreateWithoutCustomerInput>;
  };

  export type wifi_accessCreateManyCustomerInputEnvelope = {
    data: wifi_accessCreateManyCustomerInput | wifi_accessCreateManyCustomerInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCustomerInput = {
    update: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCustomerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
  };

  export type userUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUpdateManyWithoutUserNestedInput;
    troubleshoot?: troubleshootUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
    troubleshoot?: troubleshootUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type paymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: paymentWhereUniqueInput;
    update: XOR<paymentUpdateWithoutCustomerInput, paymentUncheckedUpdateWithoutCustomerInput>;
    create: XOR<paymentCreateWithoutCustomerInput, paymentUncheckedCreateWithoutCustomerInput>;
  };

  export type paymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: paymentWhereUniqueInput;
    data: XOR<paymentUpdateWithoutCustomerInput, paymentUncheckedUpdateWithoutCustomerInput>;
  };

  export type paymentUpdateManyWithWhereWithoutCustomerInput = {
    where: paymentScalarWhereInput;
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutCustomerInput>;
  };

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[];
    OR?: paymentScalarWhereInput[];
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[];
    id?: UuidFilter<'payment'> | string;
    amount?: IntFilter<'payment'> | number;
    payment_date?: DateTimeFilter<'payment'> | Date | string;
    payment_method?: StringFilter<'payment'> | string;
    customer_id?: UuidFilter<'payment'> | string;
    user_id?: UuidFilter<'payment'> | string;
    created_at?: DateTimeFilter<'payment'> | Date | string;
    updated_at?: DateTimeFilter<'payment'> | Date | string;
  };

  export type troubleshootUpsertWithWhereUniqueWithoutCustomerInput = {
    where: troubleshootWhereUniqueInput;
    update: XOR<troubleshootUpdateWithoutCustomerInput, troubleshootUncheckedUpdateWithoutCustomerInput>;
    create: XOR<troubleshootCreateWithoutCustomerInput, troubleshootUncheckedCreateWithoutCustomerInput>;
  };

  export type troubleshootUpdateWithWhereUniqueWithoutCustomerInput = {
    where: troubleshootWhereUniqueInput;
    data: XOR<troubleshootUpdateWithoutCustomerInput, troubleshootUncheckedUpdateWithoutCustomerInput>;
  };

  export type troubleshootUpdateManyWithWhereWithoutCustomerInput = {
    where: troubleshootScalarWhereInput;
    data: XOR<troubleshootUpdateManyMutationInput, troubleshootUncheckedUpdateManyWithoutCustomerInput>;
  };

  export type troubleshootScalarWhereInput = {
    AND?: troubleshootScalarWhereInput | troubleshootScalarWhereInput[];
    OR?: troubleshootScalarWhereInput[];
    NOT?: troubleshootScalarWhereInput | troubleshootScalarWhereInput[];
    id?: UuidFilter<'troubleshoot'> | string;
    issue_description?: StringFilter<'troubleshoot'> | string;
    resolution?: StringFilter<'troubleshoot'> | string;
    resolved_by?: UuidFilter<'troubleshoot'> | string;
    customer_id?: UuidFilter<'troubleshoot'> | string;
    resolution_date?: DateTimeFilter<'troubleshoot'> | Date | string;
    created_at?: DateTimeFilter<'troubleshoot'> | Date | string;
    updated_at?: DateTimeFilter<'troubleshoot'> | Date | string;
  };

  export type wifi_accessUpsertWithWhereUniqueWithoutCustomerInput = {
    where: wifi_accessWhereUniqueInput;
    update: XOR<wifi_accessUpdateWithoutCustomerInput, wifi_accessUncheckedUpdateWithoutCustomerInput>;
    create: XOR<wifi_accessCreateWithoutCustomerInput, wifi_accessUncheckedCreateWithoutCustomerInput>;
  };

  export type wifi_accessUpdateWithWhereUniqueWithoutCustomerInput = {
    where: wifi_accessWhereUniqueInput;
    data: XOR<wifi_accessUpdateWithoutCustomerInput, wifi_accessUncheckedUpdateWithoutCustomerInput>;
  };

  export type wifi_accessUpdateManyWithWhereWithoutCustomerInput = {
    where: wifi_accessScalarWhereInput;
    data: XOR<wifi_accessUpdateManyMutationInput, wifi_accessUncheckedUpdateManyWithoutCustomerInput>;
  };

  export type wifi_accessScalarWhereInput = {
    AND?: wifi_accessScalarWhereInput | wifi_accessScalarWhereInput[];
    OR?: wifi_accessScalarWhereInput[];
    NOT?: wifi_accessScalarWhereInput | wifi_accessScalarWhereInput[];
    id?: UuidFilter<'wifi_access'> | string;
    ssid?: StringFilter<'wifi_access'> | string;
    password?: StringFilter<'wifi_access'> | string;
    expiry_date?: DateTimeFilter<'wifi_access'> | Date | string;
    customer_id?: UuidFilter<'wifi_access'> | string;
    created_at?: DateTimeFilter<'wifi_access'> | Date | string;
    updated_at?: DateTimeFilter<'wifi_access'> | Date | string;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
    troubleshoot?: troubleshootCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
    troubleshoot?: troubleshootUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userCreateManyOrganizationInputEnvelope = {
    data: userCreateManyOrganizationInput | userCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateManyWithWhereWithoutOrganizationInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    organization_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type customerCreateWithoutPaymentInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomerInput;
    troubleshoot?: troubleshootCreateNestedManyWithoutCustomerInput;
    wifi_access?: wifi_accessCreateNestedManyWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutPaymentInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    troubleshoot?: troubleshootUncheckedCreateNestedManyWithoutCustomerInput;
    wifi_access?: wifi_accessUncheckedCreateNestedManyWithoutCustomerInput;
  };

  export type customerCreateOrConnectWithoutPaymentInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutPaymentInput, customerUncheckedCreateWithoutPaymentInput>;
  };

  export type userCreateWithoutPaymentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    troubleshoot?: troubleshootCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPaymentInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    troubleshoot?: troubleshootUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPaymentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
  };

  export type customerUpsertWithoutPaymentInput = {
    update: XOR<customerUpdateWithoutPaymentInput, customerUncheckedUpdateWithoutPaymentInput>;
    create: XOR<customerCreateWithoutPaymentInput, customerUncheckedCreateWithoutPaymentInput>;
    where?: customerWhereInput;
  };

  export type customerUpdateToOneWithWhereWithoutPaymentInput = {
    where?: customerWhereInput;
    data: XOR<customerUpdateWithoutPaymentInput, customerUncheckedUpdateWithoutPaymentInput>;
  };

  export type customerUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
    troubleshoot?: troubleshootUpdateManyWithoutCustomerNestedInput;
    wifi_access?: wifi_accessUpdateManyWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    troubleshoot?: troubleshootUncheckedUpdateManyWithoutCustomerNestedInput;
    wifi_access?: wifi_accessUncheckedUpdateManyWithoutCustomerNestedInput;
  };

  export type userUpsertWithoutPaymentInput = {
    update: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>;
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPaymentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>;
  };

  export type userUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    troubleshoot?: troubleshootUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    troubleshoot?: troubleshootUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type customerCreateWithoutTroubleshootInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomerInput;
    payment?: paymentCreateNestedManyWithoutCustomerInput;
    wifi_access?: wifi_accessCreateNestedManyWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutTroubleshootInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutCustomerInput;
    wifi_access?: wifi_accessUncheckedCreateNestedManyWithoutCustomerInput;
  };

  export type customerCreateOrConnectWithoutTroubleshootInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutTroubleshootInput, customerUncheckedCreateWithoutTroubleshootInput>;
  };

  export type userCreateWithoutTroubleshootInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTroubleshootInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTroubleshootInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTroubleshootInput, userUncheckedCreateWithoutTroubleshootInput>;
  };

  export type customerUpsertWithoutTroubleshootInput = {
    update: XOR<customerUpdateWithoutTroubleshootInput, customerUncheckedUpdateWithoutTroubleshootInput>;
    create: XOR<customerCreateWithoutTroubleshootInput, customerUncheckedCreateWithoutTroubleshootInput>;
    where?: customerWhereInput;
  };

  export type customerUpdateToOneWithWhereWithoutTroubleshootInput = {
    where?: customerWhereInput;
    data: XOR<customerUpdateWithoutTroubleshootInput, customerUncheckedUpdateWithoutTroubleshootInput>;
  };

  export type customerUpdateWithoutTroubleshootInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
    payment?: paymentUpdateManyWithoutCustomerNestedInput;
    wifi_access?: wifi_accessUpdateManyWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutTroubleshootInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutCustomerNestedInput;
    wifi_access?: wifi_accessUncheckedUpdateManyWithoutCustomerNestedInput;
  };

  export type userUpsertWithoutTroubleshootInput = {
    update: XOR<userUpdateWithoutTroubleshootInput, userUncheckedUpdateWithoutTroubleshootInput>;
    create: XOR<userCreateWithoutTroubleshootInput, userUncheckedCreateWithoutTroubleshootInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTroubleshootInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTroubleshootInput, userUncheckedUpdateWithoutTroubleshootInput>;
  };

  export type userUpdateWithoutTroubleshootInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTroubleshootInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type customerCreateWithoutUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentCreateNestedManyWithoutCustomerInput;
    troubleshoot?: troubleshootCreateNestedManyWithoutCustomerInput;
    wifi_access?: wifi_accessCreateNestedManyWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutCustomerInput;
    troubleshoot?: troubleshootUncheckedCreateNestedManyWithoutCustomerInput;
    wifi_access?: wifi_accessUncheckedCreateNestedManyWithoutCustomerInput;
  };

  export type customerCreateOrConnectWithoutUserInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerCreateManyUserInputEnvelope = {
    data: customerCreateManyUserInput | customerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type paymentCreateWithoutUserInput = {
    id?: string;
    amount: number;
    payment_date: Date | string;
    payment_method: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: customerCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateWithoutUserInput = {
    id?: string;
    amount: number;
    payment_date: Date | string;
    payment_method: string;
    customer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentCreateOrConnectWithoutUserInput = {
    where: paymentWhereUniqueInput;
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>;
  };

  export type paymentCreateManyUserInputEnvelope = {
    data: paymentCreateManyUserInput | paymentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type troubleshootCreateWithoutUserInput = {
    id?: string;
    issue_description: string;
    resolution: string;
    resolution_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: customerCreateNestedOneWithoutTroubleshootInput;
  };

  export type troubleshootUncheckedCreateWithoutUserInput = {
    id?: string;
    issue_description: string;
    resolution: string;
    customer_id: string;
    resolution_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type troubleshootCreateOrConnectWithoutUserInput = {
    where: troubleshootWhereUniqueInput;
    create: XOR<troubleshootCreateWithoutUserInput, troubleshootUncheckedCreateWithoutUserInput>;
  };

  export type troubleshootCreateManyUserInputEnvelope = {
    data: troubleshootCreateManyUserInput | troubleshootCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type customerUpsertWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    update: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerUpdateWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    data: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
  };

  export type customerUpdateManyWithWhereWithoutUserInput = {
    where: customerScalarWhereInput;
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutUserInput>;
  };

  export type customerScalarWhereInput = {
    AND?: customerScalarWhereInput | customerScalarWhereInput[];
    OR?: customerScalarWhereInput[];
    NOT?: customerScalarWhereInput | customerScalarWhereInput[];
    id?: UuidFilter<'customer'> | string;
    first_name?: StringFilter<'customer'> | string;
    last_name?: StringFilter<'customer'> | string;
    email?: StringFilter<'customer'> | string;
    phone_number?: StringFilter<'customer'> | string;
    address?: StringFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
  };

  export type paymentUpsertWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput;
    update: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>;
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>;
  };

  export type paymentUpdateWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput;
    data: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>;
  };

  export type paymentUpdateManyWithWhereWithoutUserInput = {
    where: paymentScalarWhereInput;
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutUserInput>;
  };

  export type troubleshootUpsertWithWhereUniqueWithoutUserInput = {
    where: troubleshootWhereUniqueInput;
    update: XOR<troubleshootUpdateWithoutUserInput, troubleshootUncheckedUpdateWithoutUserInput>;
    create: XOR<troubleshootCreateWithoutUserInput, troubleshootUncheckedCreateWithoutUserInput>;
  };

  export type troubleshootUpdateWithWhereUniqueWithoutUserInput = {
    where: troubleshootWhereUniqueInput;
    data: XOR<troubleshootUpdateWithoutUserInput, troubleshootUncheckedUpdateWithoutUserInput>;
  };

  export type troubleshootUpdateManyWithWhereWithoutUserInput = {
    where: troubleshootScalarWhereInput;
    data: XOR<troubleshootUpdateManyMutationInput, troubleshootUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationUpsertWithoutUserInput = {
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutUserInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateWithoutWifi_accessInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomerInput;
    payment?: paymentCreateNestedManyWithoutCustomerInput;
    troubleshoot?: troubleshootCreateNestedManyWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutWifi_accessInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutCustomerInput;
    troubleshoot?: troubleshootUncheckedCreateNestedManyWithoutCustomerInput;
  };

  export type customerCreateOrConnectWithoutWifi_accessInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutWifi_accessInput, customerUncheckedCreateWithoutWifi_accessInput>;
  };

  export type customerUpsertWithoutWifi_accessInput = {
    update: XOR<customerUpdateWithoutWifi_accessInput, customerUncheckedUpdateWithoutWifi_accessInput>;
    create: XOR<customerCreateWithoutWifi_accessInput, customerUncheckedCreateWithoutWifi_accessInput>;
    where?: customerWhereInput;
  };

  export type customerUpdateToOneWithWhereWithoutWifi_accessInput = {
    where?: customerWhereInput;
    data: XOR<customerUpdateWithoutWifi_accessInput, customerUncheckedUpdateWithoutWifi_accessInput>;
  };

  export type customerUpdateWithoutWifi_accessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
    payment?: paymentUpdateManyWithoutCustomerNestedInput;
    troubleshoot?: troubleshootUpdateManyWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutWifi_accessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutCustomerNestedInput;
    troubleshoot?: troubleshootUncheckedUpdateManyWithoutCustomerNestedInput;
  };

  export type paymentCreateManyCustomerInput = {
    id?: string;
    amount: number;
    payment_date: Date | string;
    payment_method: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type troubleshootCreateManyCustomerInput = {
    id?: string;
    issue_description: string;
    resolution: string;
    resolved_by: string;
    resolution_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type wifi_accessCreateManyCustomerInput = {
    id?: string;
    ssid: string;
    password: string;
    expiry_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type troubleshootUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    resolution?: StringFieldUpdateOperationsInput | string;
    resolution_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTroubleshootNestedInput;
  };

  export type troubleshootUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    resolution?: StringFieldUpdateOperationsInput | string;
    resolved_by?: StringFieldUpdateOperationsInput | string;
    resolution_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type troubleshootUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    resolution?: StringFieldUpdateOperationsInput | string;
    resolved_by?: StringFieldUpdateOperationsInput | string;
    resolution_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type wifi_accessUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ssid?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type wifi_accessUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ssid?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type wifi_accessUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ssid?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
    troubleshoot?: troubleshootUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
    troubleshoot?: troubleshootUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateManyUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentCreateManyUserInput = {
    id?: string;
    amount: number;
    payment_date: Date | string;
    payment_method: string;
    customer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type troubleshootCreateManyUserInput = {
    id?: string;
    issue_description: string;
    resolution: string;
    customer_id: string;
    resolution_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUpdateManyWithoutCustomerNestedInput;
    troubleshoot?: troubleshootUpdateManyWithoutCustomerNestedInput;
    wifi_access?: wifi_accessUpdateManyWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutCustomerNestedInput;
    troubleshoot?: troubleshootUncheckedUpdateManyWithoutCustomerNestedInput;
    wifi_access?: wifi_accessUncheckedUpdateManyWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type troubleshootUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    resolution?: StringFieldUpdateOperationsInput | string;
    resolution_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateOneRequiredWithoutTroubleshootNestedInput;
  };

  export type troubleshootUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    resolution?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    resolution_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type troubleshootUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    resolution?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    resolution_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
   */
  export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CustomerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use customerDefaultArgs instead
   */
  export type customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    customerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use paymentDefaultArgs instead
   */
  export type paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    paymentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use troubleshootDefaultArgs instead
   */
  export type troubleshootArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    troubleshootDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use wifi_accessDefaultArgs instead
   */
  export type wifi_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    wifi_accessDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
