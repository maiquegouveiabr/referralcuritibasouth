
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model area
 * 
 */
export type area = $Result.DefaultSelection<Prisma.$areaPayload>
/**
 * Model offer
 * 
 */
export type offer = $Result.DefaultSelection<Prisma.$offerPayload>
/**
 * Model reference
 * 
 */
export type reference = $Result.DefaultSelection<Prisma.$referencePayload>
/**
 * Model stake
 * 
 */
export type stake = $Result.DefaultSelection<Prisma.$stakePayload>
/**
 * Model stop_teaching_reason
 * 
 */
export type stop_teaching_reason = $Result.DefaultSelection<Prisma.$stop_teaching_reasonPayload>
/**
 * Model uba_area
 * 
 */
export type uba_area = $Result.DefaultSelection<Prisma.$uba_areaPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model zone
 * 
 */
export type zone = $Result.DefaultSelection<Prisma.$zonePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Areas
 * const areas = await prisma.area.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Areas
   * const areas = await prisma.area.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.area`: Exposes CRUD operations for the **area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.areaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.offerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reference`: Exposes CRUD operations for the **reference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more References
    * const references = await prisma.reference.findMany()
    * ```
    */
  get reference(): Prisma.referenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stake`: Exposes CRUD operations for the **stake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stakes
    * const stakes = await prisma.stake.findMany()
    * ```
    */
  get stake(): Prisma.stakeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stop_teaching_reason`: Exposes CRUD operations for the **stop_teaching_reason** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stop_teaching_reasons
    * const stop_teaching_reasons = await prisma.stop_teaching_reason.findMany()
    * ```
    */
  get stop_teaching_reason(): Prisma.stop_teaching_reasonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uba_area`: Exposes CRUD operations for the **uba_area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uba_areas
    * const uba_areas = await prisma.uba_area.findMany()
    * ```
    */
  get uba_area(): Prisma.uba_areaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zone`: Exposes CRUD operations for the **zone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zones
    * const zones = await prisma.zone.findMany()
    * ```
    */
  get zone(): Prisma.zoneDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    area: 'area',
    offer: 'offer',
    reference: 'reference',
    stake: 'stake',
    stop_teaching_reason: 'stop_teaching_reason',
    uba_area: 'uba_area',
    user: 'user',
    zone: 'zone'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "area" | "offer" | "reference" | "stake" | "stop_teaching_reason" | "uba_area" | "user" | "zone"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      area: {
        payload: Prisma.$areaPayload<ExtArgs>
        fields: Prisma.areaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.areaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.areaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>
          }
          findFirst: {
            args: Prisma.areaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.areaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>
          }
          findMany: {
            args: Prisma.areaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>[]
          }
          create: {
            args: Prisma.areaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>
          }
          createMany: {
            args: Prisma.areaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.areaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>[]
          }
          delete: {
            args: Prisma.areaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>
          }
          update: {
            args: Prisma.areaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>
          }
          deleteMany: {
            args: Prisma.areaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.areaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.areaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>[]
          }
          upsert: {
            args: Prisma.areaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.areaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.areaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      offer: {
        payload: Prisma.$offerPayload<ExtArgs>
        fields: Prisma.offerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.offerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$offerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.offerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$offerPayload>
          }
          findFirst: {
            args: Prisma.offerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$offerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.offerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$offerPayload>
          }
          findMany: {
            args: Prisma.offerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$offerPayload>[]
          }
          create: {
            args: Prisma.offerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$offerPayload>
          }
          createMany: {
            args: Prisma.offerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.offerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$offerPayload>[]
          }
          delete: {
            args: Prisma.offerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$offerPayload>
          }
          update: {
            args: Prisma.offerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$offerPayload>
          }
          deleteMany: {
            args: Prisma.offerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.offerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.offerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$offerPayload>[]
          }
          upsert: {
            args: Prisma.offerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$offerPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.offerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.offerCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
          }
        }
      }
      reference: {
        payload: Prisma.$referencePayload<ExtArgs>
        fields: Prisma.referenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.referenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.referenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referencePayload>
          }
          findFirst: {
            args: Prisma.referenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.referenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referencePayload>
          }
          findMany: {
            args: Prisma.referenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referencePayload>[]
          }
          create: {
            args: Prisma.referenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referencePayload>
          }
          createMany: {
            args: Prisma.referenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.referenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referencePayload>[]
          }
          delete: {
            args: Prisma.referenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referencePayload>
          }
          update: {
            args: Prisma.referenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referencePayload>
          }
          deleteMany: {
            args: Prisma.referenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.referenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.referenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referencePayload>[]
          }
          upsert: {
            args: Prisma.referenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referencePayload>
          }
          aggregate: {
            args: Prisma.ReferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReference>
          }
          groupBy: {
            args: Prisma.referenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.referenceCountArgs<ExtArgs>
            result: $Utils.Optional<ReferenceCountAggregateOutputType> | number
          }
        }
      }
      stake: {
        payload: Prisma.$stakePayload<ExtArgs>
        fields: Prisma.stakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakePayload>
          }
          findFirst: {
            args: Prisma.stakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakePayload>
          }
          findMany: {
            args: Prisma.stakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakePayload>[]
          }
          create: {
            args: Prisma.stakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakePayload>
          }
          createMany: {
            args: Prisma.stakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakePayload>[]
          }
          delete: {
            args: Prisma.stakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakePayload>
          }
          update: {
            args: Prisma.stakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakePayload>
          }
          deleteMany: {
            args: Prisma.stakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stakeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakePayload>[]
          }
          upsert: {
            args: Prisma.stakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stakePayload>
          }
          aggregate: {
            args: Prisma.StakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStake>
          }
          groupBy: {
            args: Prisma.stakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.stakeCountArgs<ExtArgs>
            result: $Utils.Optional<StakeCountAggregateOutputType> | number
          }
        }
      }
      stop_teaching_reason: {
        payload: Prisma.$stop_teaching_reasonPayload<ExtArgs>
        fields: Prisma.stop_teaching_reasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stop_teaching_reasonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stop_teaching_reasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stop_teaching_reasonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stop_teaching_reasonPayload>
          }
          findFirst: {
            args: Prisma.stop_teaching_reasonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stop_teaching_reasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stop_teaching_reasonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stop_teaching_reasonPayload>
          }
          findMany: {
            args: Prisma.stop_teaching_reasonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stop_teaching_reasonPayload>[]
          }
          create: {
            args: Prisma.stop_teaching_reasonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stop_teaching_reasonPayload>
          }
          createMany: {
            args: Prisma.stop_teaching_reasonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stop_teaching_reasonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stop_teaching_reasonPayload>[]
          }
          delete: {
            args: Prisma.stop_teaching_reasonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stop_teaching_reasonPayload>
          }
          update: {
            args: Prisma.stop_teaching_reasonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stop_teaching_reasonPayload>
          }
          deleteMany: {
            args: Prisma.stop_teaching_reasonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stop_teaching_reasonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stop_teaching_reasonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stop_teaching_reasonPayload>[]
          }
          upsert: {
            args: Prisma.stop_teaching_reasonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stop_teaching_reasonPayload>
          }
          aggregate: {
            args: Prisma.Stop_teaching_reasonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStop_teaching_reason>
          }
          groupBy: {
            args: Prisma.stop_teaching_reasonGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stop_teaching_reasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.stop_teaching_reasonCountArgs<ExtArgs>
            result: $Utils.Optional<Stop_teaching_reasonCountAggregateOutputType> | number
          }
        }
      }
      uba_area: {
        payload: Prisma.$uba_areaPayload<ExtArgs>
        fields: Prisma.uba_areaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.uba_areaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uba_areaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.uba_areaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uba_areaPayload>
          }
          findFirst: {
            args: Prisma.uba_areaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uba_areaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.uba_areaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uba_areaPayload>
          }
          findMany: {
            args: Prisma.uba_areaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uba_areaPayload>[]
          }
          create: {
            args: Prisma.uba_areaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uba_areaPayload>
          }
          createMany: {
            args: Prisma.uba_areaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.uba_areaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uba_areaPayload>[]
          }
          delete: {
            args: Prisma.uba_areaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uba_areaPayload>
          }
          update: {
            args: Prisma.uba_areaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uba_areaPayload>
          }
          deleteMany: {
            args: Prisma.uba_areaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.uba_areaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.uba_areaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uba_areaPayload>[]
          }
          upsert: {
            args: Prisma.uba_areaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uba_areaPayload>
          }
          aggregate: {
            args: Prisma.Uba_areaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUba_area>
          }
          groupBy: {
            args: Prisma.uba_areaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Uba_areaGroupByOutputType>[]
          }
          count: {
            args: Prisma.uba_areaCountArgs<ExtArgs>
            result: $Utils.Optional<Uba_areaCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      zone: {
        payload: Prisma.$zonePayload<ExtArgs>
        fields: Prisma.zoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.zoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.zoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zonePayload>
          }
          findFirst: {
            args: Prisma.zoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.zoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zonePayload>
          }
          findMany: {
            args: Prisma.zoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zonePayload>[]
          }
          create: {
            args: Prisma.zoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zonePayload>
          }
          createMany: {
            args: Prisma.zoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.zoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zonePayload>[]
          }
          delete: {
            args: Prisma.zoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zonePayload>
          }
          update: {
            args: Prisma.zoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zonePayload>
          }
          deleteMany: {
            args: Prisma.zoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.zoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.zoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zonePayload>[]
          }
          upsert: {
            args: Prisma.zoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zonePayload>
          }
          aggregate: {
            args: Prisma.ZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZone>
          }
          groupBy: {
            args: Prisma.zoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.zoneCountArgs<ExtArgs>
            result: $Utils.Optional<ZoneCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    area?: areaOmit
    offer?: offerOmit
    reference?: referenceOmit
    stake?: stakeOmit
    stop_teaching_reason?: stop_teaching_reasonOmit
    uba_area?: uba_areaOmit
    user?: userOmit
    zone?: zoneOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    reference: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reference?: boolean | AreaCountOutputTypeCountReferenceArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountReferenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referenceWhereInput
  }


  /**
   * Count Type ZoneCountOutputType
   */

  export type ZoneCountOutputType = {
    area: number
  }

  export type ZoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | ZoneCountOutputTypeCountAreaArgs
  }

  // Custom InputTypes
  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneCountOutputType
     */
    select?: ZoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: areaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    id: number | null
    zone_id: number | null
    stake_id: number | null
  }

  export type AreaSumAggregateOutputType = {
    id: number | null
    zone_id: number | null
    stake_id: number | null
  }

  export type AreaMinAggregateOutputType = {
    id: number | null
    name: string | null
    zone_id: number | null
    is_active: boolean | null
    stake_id: number | null
  }

  export type AreaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    zone_id: number | null
    is_active: boolean | null
    stake_id: number | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    name: number
    zone_id: number
    is_active: number
    stake_id: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    id?: true
    zone_id?: true
    stake_id?: true
  }

  export type AreaSumAggregateInputType = {
    id?: true
    zone_id?: true
    stake_id?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
    name?: true
    zone_id?: true
    is_active?: true
    stake_id?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    name?: true
    zone_id?: true
    is_active?: true
    stake_id?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    name?: true
    zone_id?: true
    is_active?: true
    stake_id?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which area to aggregate.
     */
    where?: areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areaOrderByWithRelationInput | areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type areaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: areaWhereInput
    orderBy?: areaOrderByWithAggregationInput | areaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: areaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: number
    name: string
    zone_id: number
    is_active: boolean
    stake_id: number | null
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends areaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type areaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    zone_id?: boolean
    is_active?: boolean
    stake_id?: boolean
    zone?: boolean | zoneDefaultArgs<ExtArgs>
    reference?: boolean | area$referenceArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type areaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    zone_id?: boolean
    is_active?: boolean
    stake_id?: boolean
    zone?: boolean | zoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type areaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    zone_id?: boolean
    is_active?: boolean
    stake_id?: boolean
    zone?: boolean | zoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type areaSelectScalar = {
    id?: boolean
    name?: boolean
    zone_id?: boolean
    is_active?: boolean
    stake_id?: boolean
  }

  export type areaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "zone_id" | "is_active" | "stake_id", ExtArgs["result"]["area"]>
  export type areaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | zoneDefaultArgs<ExtArgs>
    reference?: boolean | area$referenceArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type areaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | zoneDefaultArgs<ExtArgs>
  }
  export type areaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | zoneDefaultArgs<ExtArgs>
  }

  export type $areaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "area"
    objects: {
      zone: Prisma.$zonePayload<ExtArgs>
      reference: Prisma.$referencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      zone_id: number
      is_active: boolean
      stake_id: number | null
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type areaGetPayload<S extends boolean | null | undefined | areaDefaultArgs> = $Result.GetResult<Prisma.$areaPayload, S>

  type areaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<areaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface areaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['area'], meta: { name: 'area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {areaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends areaFindUniqueArgs>(args: SelectSubset<T, areaFindUniqueArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {areaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends areaFindUniqueOrThrowArgs>(args: SelectSubset<T, areaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends areaFindFirstArgs>(args?: SelectSubset<T, areaFindFirstArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends areaFindFirstOrThrowArgs>(args?: SelectSubset<T, areaFindFirstOrThrowArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends areaFindManyArgs>(args?: SelectSubset<T, areaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {areaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends areaCreateArgs>(args: SelectSubset<T, areaCreateArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {areaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends areaCreateManyArgs>(args?: SelectSubset<T, areaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {areaCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends areaCreateManyAndReturnArgs>(args?: SelectSubset<T, areaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Area.
     * @param {areaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends areaDeleteArgs>(args: SelectSubset<T, areaDeleteArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {areaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends areaUpdateArgs>(args: SelectSubset<T, areaUpdateArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {areaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends areaDeleteManyArgs>(args?: SelectSubset<T, areaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends areaUpdateManyArgs>(args: SelectSubset<T, areaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas and returns the data updated in the database.
     * @param {areaUpdateManyAndReturnArgs} args - Arguments to update many Areas.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends areaUpdateManyAndReturnArgs>(args: SelectSubset<T, areaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Area.
     * @param {areaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends areaUpsertArgs>(args: SelectSubset<T, areaUpsertArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends areaCountArgs>(
      args?: Subset<T, areaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areaGroupByArgs} args - Group by arguments.
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
      T extends areaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: areaGroupByArgs['orderBy'] }
        : { orderBy?: areaGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, areaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the area model
   */
  readonly fields: areaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__areaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zone<T extends zoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, zoneDefaultArgs<ExtArgs>>): Prisma__zoneClient<$Result.GetResult<Prisma.$zonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reference<T extends area$referenceArgs<ExtArgs> = {}>(args?: Subset<T, area$referenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the area model
   */
  interface areaFieldRefs {
    readonly id: FieldRef<"area", 'Int'>
    readonly name: FieldRef<"area", 'String'>
    readonly zone_id: FieldRef<"area", 'Int'>
    readonly is_active: FieldRef<"area", 'Boolean'>
    readonly stake_id: FieldRef<"area", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * area findUnique
   */
  export type areaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * Filter, which area to fetch.
     */
    where: areaWhereUniqueInput
  }

  /**
   * area findUniqueOrThrow
   */
  export type areaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * Filter, which area to fetch.
     */
    where: areaWhereUniqueInput
  }

  /**
   * area findFirst
   */
  export type areaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * Filter, which area to fetch.
     */
    where?: areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areaOrderByWithRelationInput | areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for areas.
     */
    cursor?: areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * area findFirstOrThrow
   */
  export type areaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * Filter, which area to fetch.
     */
    where?: areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areaOrderByWithRelationInput | areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for areas.
     */
    cursor?: areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * area findMany
   */
  export type areaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * Filter, which areas to fetch.
     */
    where?: areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areaOrderByWithRelationInput | areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing areas.
     */
    cursor?: areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * area create
   */
  export type areaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * The data needed to create a area.
     */
    data: XOR<areaCreateInput, areaUncheckedCreateInput>
  }

  /**
   * area createMany
   */
  export type areaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many areas.
     */
    data: areaCreateManyInput | areaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * area createManyAndReturn
   */
  export type areaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * The data used to create many areas.
     */
    data: areaCreateManyInput | areaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * area update
   */
  export type areaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * The data needed to update a area.
     */
    data: XOR<areaUpdateInput, areaUncheckedUpdateInput>
    /**
     * Choose, which area to update.
     */
    where: areaWhereUniqueInput
  }

  /**
   * area updateMany
   */
  export type areaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update areas.
     */
    data: XOR<areaUpdateManyMutationInput, areaUncheckedUpdateManyInput>
    /**
     * Filter which areas to update
     */
    where?: areaWhereInput
    /**
     * Limit how many areas to update.
     */
    limit?: number
  }

  /**
   * area updateManyAndReturn
   */
  export type areaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * The data used to update areas.
     */
    data: XOR<areaUpdateManyMutationInput, areaUncheckedUpdateManyInput>
    /**
     * Filter which areas to update
     */
    where?: areaWhereInput
    /**
     * Limit how many areas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * area upsert
   */
  export type areaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * The filter to search for the area to update in case it exists.
     */
    where: areaWhereUniqueInput
    /**
     * In case the area found by the `where` argument doesn't exist, create a new area with this data.
     */
    create: XOR<areaCreateInput, areaUncheckedCreateInput>
    /**
     * In case the area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<areaUpdateInput, areaUncheckedUpdateInput>
  }

  /**
   * area delete
   */
  export type areaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    /**
     * Filter which area to delete.
     */
    where: areaWhereUniqueInput
  }

  /**
   * area deleteMany
   */
  export type areaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which areas to delete
     */
    where?: areaWhereInput
    /**
     * Limit how many areas to delete.
     */
    limit?: number
  }

  /**
   * area.reference
   */
  export type area$referenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceInclude<ExtArgs> | null
    where?: referenceWhereInput
    orderBy?: referenceOrderByWithRelationInput | referenceOrderByWithRelationInput[]
    cursor?: referenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * area without action
   */
  export type areaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
  }


  /**
   * Model offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    id: number | null
  }

  export type OfferSumAggregateOutputType = {
    id: number | null
  }

  export type OfferMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OfferMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    id?: true
  }

  export type OfferSumAggregateInputType = {
    id?: true
  }

  export type OfferMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which offer to aggregate.
     */
    where?: offerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of offers to fetch.
     */
    orderBy?: offerOrderByWithRelationInput | offerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: offerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type offerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: offerWhereInput
    orderBy?: offerOrderByWithAggregationInput | offerOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: offerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: number
    name: string
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends offerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type offerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["offer"]>

  export type offerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["offer"]>

  export type offerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["offer"]>

  export type offerSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type offerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["offer"]>

  export type $offerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "offer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type offerGetPayload<S extends boolean | null | undefined | offerDefaultArgs> = $Result.GetResult<Prisma.$offerPayload, S>

  type offerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<offerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface offerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['offer'], meta: { name: 'offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {offerFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends offerFindUniqueArgs>(args: SelectSubset<T, offerFindUniqueArgs<ExtArgs>>): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {offerFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends offerFindUniqueOrThrowArgs>(args: SelectSubset<T, offerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offerFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends offerFindFirstArgs>(args?: SelectSubset<T, offerFindFirstArgs<ExtArgs>>): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offerFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends offerFindFirstOrThrowArgs>(args?: SelectSubset<T, offerFindFirstOrThrowArgs<ExtArgs>>): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends offerFindManyArgs>(args?: SelectSubset<T, offerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offer.
     * @param {offerCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends offerCreateArgs>(args: SelectSubset<T, offerCreateArgs<ExtArgs>>): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offers.
     * @param {offerCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends offerCreateManyArgs>(args?: SelectSubset<T, offerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {offerCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends offerCreateManyAndReturnArgs>(args?: SelectSubset<T, offerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Offer.
     * @param {offerDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends offerDeleteArgs>(args: SelectSubset<T, offerDeleteArgs<ExtArgs>>): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offer.
     * @param {offerUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends offerUpdateArgs>(args: SelectSubset<T, offerUpdateArgs<ExtArgs>>): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offers.
     * @param {offerDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends offerDeleteManyArgs>(args?: SelectSubset<T, offerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends offerUpdateManyArgs>(args: SelectSubset<T, offerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers and returns the data updated in the database.
     * @param {offerUpdateManyAndReturnArgs} args - Arguments to update many Offers.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends offerUpdateManyAndReturnArgs>(args: SelectSubset<T, offerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Offer.
     * @param {offerUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends offerUpsertArgs>(args: SelectSubset<T, offerUpsertArgs<ExtArgs>>): Prisma__offerClient<$Result.GetResult<Prisma.$offerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offerCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends offerCountArgs>(
      args?: Subset<T, offerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offerGroupByArgs} args - Group by arguments.
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
      T extends offerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: offerGroupByArgs['orderBy'] }
        : { orderBy?: offerGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, offerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the offer model
   */
  readonly fields: offerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__offerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the offer model
   */
  interface offerFieldRefs {
    readonly id: FieldRef<"offer", 'Int'>
    readonly name: FieldRef<"offer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * offer findUnique
   */
  export type offerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the offer
     */
    omit?: offerOmit<ExtArgs> | null
    /**
     * Filter, which offer to fetch.
     */
    where: offerWhereUniqueInput
  }

  /**
   * offer findUniqueOrThrow
   */
  export type offerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the offer
     */
    omit?: offerOmit<ExtArgs> | null
    /**
     * Filter, which offer to fetch.
     */
    where: offerWhereUniqueInput
  }

  /**
   * offer findFirst
   */
  export type offerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the offer
     */
    omit?: offerOmit<ExtArgs> | null
    /**
     * Filter, which offer to fetch.
     */
    where?: offerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of offers to fetch.
     */
    orderBy?: offerOrderByWithRelationInput | offerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for offers.
     */
    cursor?: offerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * offer findFirstOrThrow
   */
  export type offerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the offer
     */
    omit?: offerOmit<ExtArgs> | null
    /**
     * Filter, which offer to fetch.
     */
    where?: offerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of offers to fetch.
     */
    orderBy?: offerOrderByWithRelationInput | offerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for offers.
     */
    cursor?: offerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * offer findMany
   */
  export type offerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the offer
     */
    omit?: offerOmit<ExtArgs> | null
    /**
     * Filter, which offers to fetch.
     */
    where?: offerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of offers to fetch.
     */
    orderBy?: offerOrderByWithRelationInput | offerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing offers.
     */
    cursor?: offerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` offers.
     */
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * offer create
   */
  export type offerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the offer
     */
    omit?: offerOmit<ExtArgs> | null
    /**
     * The data needed to create a offer.
     */
    data: XOR<offerCreateInput, offerUncheckedCreateInput>
  }

  /**
   * offer createMany
   */
  export type offerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many offers.
     */
    data: offerCreateManyInput | offerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * offer createManyAndReturn
   */
  export type offerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the offer
     */
    omit?: offerOmit<ExtArgs> | null
    /**
     * The data used to create many offers.
     */
    data: offerCreateManyInput | offerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * offer update
   */
  export type offerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the offer
     */
    omit?: offerOmit<ExtArgs> | null
    /**
     * The data needed to update a offer.
     */
    data: XOR<offerUpdateInput, offerUncheckedUpdateInput>
    /**
     * Choose, which offer to update.
     */
    where: offerWhereUniqueInput
  }

  /**
   * offer updateMany
   */
  export type offerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update offers.
     */
    data: XOR<offerUpdateManyMutationInput, offerUncheckedUpdateManyInput>
    /**
     * Filter which offers to update
     */
    where?: offerWhereInput
    /**
     * Limit how many offers to update.
     */
    limit?: number
  }

  /**
   * offer updateManyAndReturn
   */
  export type offerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the offer
     */
    omit?: offerOmit<ExtArgs> | null
    /**
     * The data used to update offers.
     */
    data: XOR<offerUpdateManyMutationInput, offerUncheckedUpdateManyInput>
    /**
     * Filter which offers to update
     */
    where?: offerWhereInput
    /**
     * Limit how many offers to update.
     */
    limit?: number
  }

  /**
   * offer upsert
   */
  export type offerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the offer
     */
    omit?: offerOmit<ExtArgs> | null
    /**
     * The filter to search for the offer to update in case it exists.
     */
    where: offerWhereUniqueInput
    /**
     * In case the offer found by the `where` argument doesn't exist, create a new offer with this data.
     */
    create: XOR<offerCreateInput, offerUncheckedCreateInput>
    /**
     * In case the offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<offerUpdateInput, offerUncheckedUpdateInput>
  }

  /**
   * offer delete
   */
  export type offerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the offer
     */
    omit?: offerOmit<ExtArgs> | null
    /**
     * Filter which offer to delete.
     */
    where: offerWhereUniqueInput
  }

  /**
   * offer deleteMany
   */
  export type offerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which offers to delete
     */
    where?: offerWhereInput
    /**
     * Limit how many offers to delete.
     */
    limit?: number
  }

  /**
   * offer without action
   */
  export type offerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer
     */
    select?: offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the offer
     */
    omit?: offerOmit<ExtArgs> | null
  }


  /**
   * Model reference
   */

  export type AggregateReference = {
    _count: ReferenceCountAggregateOutputType | null
    _avg: ReferenceAvgAggregateOutputType | null
    _sum: ReferenceSumAggregateOutputType | null
    _min: ReferenceMinAggregateOutputType | null
    _max: ReferenceMaxAggregateOutputType | null
  }

  export type ReferenceAvgAggregateOutputType = {
    area_id: number | null
  }

  export type ReferenceSumAggregateOutputType = {
    area_id: number | null
  }

  export type ReferenceMinAggregateOutputType = {
    id: string | null
    sent_date: Date | null
    name: string | null
    area_id: number | null
    other: string | null
    who_sent: string | null
    offer: string | null
    phone: string | null
  }

  export type ReferenceMaxAggregateOutputType = {
    id: string | null
    sent_date: Date | null
    name: string | null
    area_id: number | null
    other: string | null
    who_sent: string | null
    offer: string | null
    phone: string | null
  }

  export type ReferenceCountAggregateOutputType = {
    id: number
    sent_date: number
    name: number
    area_id: number
    other: number
    who_sent: number
    offer: number
    phone: number
    _all: number
  }


  export type ReferenceAvgAggregateInputType = {
    area_id?: true
  }

  export type ReferenceSumAggregateInputType = {
    area_id?: true
  }

  export type ReferenceMinAggregateInputType = {
    id?: true
    sent_date?: true
    name?: true
    area_id?: true
    other?: true
    who_sent?: true
    offer?: true
    phone?: true
  }

  export type ReferenceMaxAggregateInputType = {
    id?: true
    sent_date?: true
    name?: true
    area_id?: true
    other?: true
    who_sent?: true
    offer?: true
    phone?: true
  }

  export type ReferenceCountAggregateInputType = {
    id?: true
    sent_date?: true
    name?: true
    area_id?: true
    other?: true
    who_sent?: true
    offer?: true
    phone?: true
    _all?: true
  }

  export type ReferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reference to aggregate.
     */
    where?: referenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of references to fetch.
     */
    orderBy?: referenceOrderByWithRelationInput | referenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: referenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` references from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` references.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned references
    **/
    _count?: true | ReferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferenceMaxAggregateInputType
  }

  export type GetReferenceAggregateType<T extends ReferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateReference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReference[P]>
      : GetScalarType<T[P], AggregateReference[P]>
  }




  export type referenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referenceWhereInput
    orderBy?: referenceOrderByWithAggregationInput | referenceOrderByWithAggregationInput[]
    by: ReferenceScalarFieldEnum[] | ReferenceScalarFieldEnum
    having?: referenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferenceCountAggregateInputType | true
    _avg?: ReferenceAvgAggregateInputType
    _sum?: ReferenceSumAggregateInputType
    _min?: ReferenceMinAggregateInputType
    _max?: ReferenceMaxAggregateInputType
  }

  export type ReferenceGroupByOutputType = {
    id: string
    sent_date: Date
    name: string
    area_id: number
    other: string | null
    who_sent: string
    offer: string | null
    phone: string | null
    _count: ReferenceCountAggregateOutputType | null
    _avg: ReferenceAvgAggregateOutputType | null
    _sum: ReferenceSumAggregateOutputType | null
    _min: ReferenceMinAggregateOutputType | null
    _max: ReferenceMaxAggregateOutputType | null
  }

  type GetReferenceGroupByPayload<T extends referenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferenceGroupByOutputType[P]>
            : GetScalarType<T[P], ReferenceGroupByOutputType[P]>
        }
      >
    >


  export type referenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sent_date?: boolean
    name?: boolean
    area_id?: boolean
    other?: boolean
    who_sent?: boolean
    offer?: boolean
    phone?: boolean
    area?: boolean | areaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reference"]>

  export type referenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sent_date?: boolean
    name?: boolean
    area_id?: boolean
    other?: boolean
    who_sent?: boolean
    offer?: boolean
    phone?: boolean
    area?: boolean | areaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reference"]>

  export type referenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sent_date?: boolean
    name?: boolean
    area_id?: boolean
    other?: boolean
    who_sent?: boolean
    offer?: boolean
    phone?: boolean
    area?: boolean | areaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reference"]>

  export type referenceSelectScalar = {
    id?: boolean
    sent_date?: boolean
    name?: boolean
    area_id?: boolean
    other?: boolean
    who_sent?: boolean
    offer?: boolean
    phone?: boolean
  }

  export type referenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sent_date" | "name" | "area_id" | "other" | "who_sent" | "offer" | "phone", ExtArgs["result"]["reference"]>
  export type referenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | areaDefaultArgs<ExtArgs>
  }
  export type referenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | areaDefaultArgs<ExtArgs>
  }
  export type referenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | areaDefaultArgs<ExtArgs>
  }

  export type $referencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reference"
    objects: {
      area: Prisma.$areaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sent_date: Date
      name: string
      area_id: number
      other: string | null
      who_sent: string
      offer: string | null
      phone: string | null
    }, ExtArgs["result"]["reference"]>
    composites: {}
  }

  type referenceGetPayload<S extends boolean | null | undefined | referenceDefaultArgs> = $Result.GetResult<Prisma.$referencePayload, S>

  type referenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<referenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferenceCountAggregateInputType | true
    }

  export interface referenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reference'], meta: { name: 'reference' } }
    /**
     * Find zero or one Reference that matches the filter.
     * @param {referenceFindUniqueArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends referenceFindUniqueArgs>(args: SelectSubset<T, referenceFindUniqueArgs<ExtArgs>>): Prisma__referenceClient<$Result.GetResult<Prisma.$referencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {referenceFindUniqueOrThrowArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends referenceFindUniqueOrThrowArgs>(args: SelectSubset<T, referenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__referenceClient<$Result.GetResult<Prisma.$referencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referenceFindFirstArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends referenceFindFirstArgs>(args?: SelectSubset<T, referenceFindFirstArgs<ExtArgs>>): Prisma__referenceClient<$Result.GetResult<Prisma.$referencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referenceFindFirstOrThrowArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends referenceFindFirstOrThrowArgs>(args?: SelectSubset<T, referenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__referenceClient<$Result.GetResult<Prisma.$referencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more References that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all References
     * const references = await prisma.reference.findMany()
     * 
     * // Get first 10 References
     * const references = await prisma.reference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referenceWithIdOnly = await prisma.reference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends referenceFindManyArgs>(args?: SelectSubset<T, referenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reference.
     * @param {referenceCreateArgs} args - Arguments to create a Reference.
     * @example
     * // Create one Reference
     * const Reference = await prisma.reference.create({
     *   data: {
     *     // ... data to create a Reference
     *   }
     * })
     * 
     */
    create<T extends referenceCreateArgs>(args: SelectSubset<T, referenceCreateArgs<ExtArgs>>): Prisma__referenceClient<$Result.GetResult<Prisma.$referencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many References.
     * @param {referenceCreateManyArgs} args - Arguments to create many References.
     * @example
     * // Create many References
     * const reference = await prisma.reference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends referenceCreateManyArgs>(args?: SelectSubset<T, referenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many References and returns the data saved in the database.
     * @param {referenceCreateManyAndReturnArgs} args - Arguments to create many References.
     * @example
     * // Create many References
     * const reference = await prisma.reference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many References and only return the `id`
     * const referenceWithIdOnly = await prisma.reference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends referenceCreateManyAndReturnArgs>(args?: SelectSubset<T, referenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reference.
     * @param {referenceDeleteArgs} args - Arguments to delete one Reference.
     * @example
     * // Delete one Reference
     * const Reference = await prisma.reference.delete({
     *   where: {
     *     // ... filter to delete one Reference
     *   }
     * })
     * 
     */
    delete<T extends referenceDeleteArgs>(args: SelectSubset<T, referenceDeleteArgs<ExtArgs>>): Prisma__referenceClient<$Result.GetResult<Prisma.$referencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reference.
     * @param {referenceUpdateArgs} args - Arguments to update one Reference.
     * @example
     * // Update one Reference
     * const reference = await prisma.reference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends referenceUpdateArgs>(args: SelectSubset<T, referenceUpdateArgs<ExtArgs>>): Prisma__referenceClient<$Result.GetResult<Prisma.$referencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more References.
     * @param {referenceDeleteManyArgs} args - Arguments to filter References to delete.
     * @example
     * // Delete a few References
     * const { count } = await prisma.reference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends referenceDeleteManyArgs>(args?: SelectSubset<T, referenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more References.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many References
     * const reference = await prisma.reference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends referenceUpdateManyArgs>(args: SelectSubset<T, referenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more References and returns the data updated in the database.
     * @param {referenceUpdateManyAndReturnArgs} args - Arguments to update many References.
     * @example
     * // Update many References
     * const reference = await prisma.reference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more References and only return the `id`
     * const referenceWithIdOnly = await prisma.reference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends referenceUpdateManyAndReturnArgs>(args: SelectSubset<T, referenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reference.
     * @param {referenceUpsertArgs} args - Arguments to update or create a Reference.
     * @example
     * // Update or create a Reference
     * const reference = await prisma.reference.upsert({
     *   create: {
     *     // ... data to create a Reference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reference we want to update
     *   }
     * })
     */
    upsert<T extends referenceUpsertArgs>(args: SelectSubset<T, referenceUpsertArgs<ExtArgs>>): Prisma__referenceClient<$Result.GetResult<Prisma.$referencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of References.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referenceCountArgs} args - Arguments to filter References to count.
     * @example
     * // Count the number of References
     * const count = await prisma.reference.count({
     *   where: {
     *     // ... the filter for the References we want to count
     *   }
     * })
    **/
    count<T extends referenceCountArgs>(
      args?: Subset<T, referenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferenceAggregateArgs>(args: Subset<T, ReferenceAggregateArgs>): Prisma.PrismaPromise<GetReferenceAggregateType<T>>

    /**
     * Group by Reference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referenceGroupByArgs} args - Group by arguments.
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
      T extends referenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: referenceGroupByArgs['orderBy'] }
        : { orderBy?: referenceGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, referenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reference model
   */
  readonly fields: referenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__referenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends areaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, areaDefaultArgs<ExtArgs>>): Prisma__areaClient<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reference model
   */
  interface referenceFieldRefs {
    readonly id: FieldRef<"reference", 'String'>
    readonly sent_date: FieldRef<"reference", 'DateTime'>
    readonly name: FieldRef<"reference", 'String'>
    readonly area_id: FieldRef<"reference", 'Int'>
    readonly other: FieldRef<"reference", 'String'>
    readonly who_sent: FieldRef<"reference", 'String'>
    readonly offer: FieldRef<"reference", 'String'>
    readonly phone: FieldRef<"reference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * reference findUnique
   */
  export type referenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceInclude<ExtArgs> | null
    /**
     * Filter, which reference to fetch.
     */
    where: referenceWhereUniqueInput
  }

  /**
   * reference findUniqueOrThrow
   */
  export type referenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceInclude<ExtArgs> | null
    /**
     * Filter, which reference to fetch.
     */
    where: referenceWhereUniqueInput
  }

  /**
   * reference findFirst
   */
  export type referenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceInclude<ExtArgs> | null
    /**
     * Filter, which reference to fetch.
     */
    where?: referenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of references to fetch.
     */
    orderBy?: referenceOrderByWithRelationInput | referenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for references.
     */
    cursor?: referenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` references from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` references.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of references.
     */
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * reference findFirstOrThrow
   */
  export type referenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceInclude<ExtArgs> | null
    /**
     * Filter, which reference to fetch.
     */
    where?: referenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of references to fetch.
     */
    orderBy?: referenceOrderByWithRelationInput | referenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for references.
     */
    cursor?: referenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` references from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` references.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of references.
     */
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * reference findMany
   */
  export type referenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceInclude<ExtArgs> | null
    /**
     * Filter, which references to fetch.
     */
    where?: referenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of references to fetch.
     */
    orderBy?: referenceOrderByWithRelationInput | referenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing references.
     */
    cursor?: referenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` references from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` references.
     */
    skip?: number
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * reference create
   */
  export type referenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceInclude<ExtArgs> | null
    /**
     * The data needed to create a reference.
     */
    data: XOR<referenceCreateInput, referenceUncheckedCreateInput>
  }

  /**
   * reference createMany
   */
  export type referenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many references.
     */
    data: referenceCreateManyInput | referenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reference createManyAndReturn
   */
  export type referenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * The data used to create many references.
     */
    data: referenceCreateManyInput | referenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reference update
   */
  export type referenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceInclude<ExtArgs> | null
    /**
     * The data needed to update a reference.
     */
    data: XOR<referenceUpdateInput, referenceUncheckedUpdateInput>
    /**
     * Choose, which reference to update.
     */
    where: referenceWhereUniqueInput
  }

  /**
   * reference updateMany
   */
  export type referenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update references.
     */
    data: XOR<referenceUpdateManyMutationInput, referenceUncheckedUpdateManyInput>
    /**
     * Filter which references to update
     */
    where?: referenceWhereInput
    /**
     * Limit how many references to update.
     */
    limit?: number
  }

  /**
   * reference updateManyAndReturn
   */
  export type referenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * The data used to update references.
     */
    data: XOR<referenceUpdateManyMutationInput, referenceUncheckedUpdateManyInput>
    /**
     * Filter which references to update
     */
    where?: referenceWhereInput
    /**
     * Limit how many references to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reference upsert
   */
  export type referenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceInclude<ExtArgs> | null
    /**
     * The filter to search for the reference to update in case it exists.
     */
    where: referenceWhereUniqueInput
    /**
     * In case the reference found by the `where` argument doesn't exist, create a new reference with this data.
     */
    create: XOR<referenceCreateInput, referenceUncheckedCreateInput>
    /**
     * In case the reference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<referenceUpdateInput, referenceUncheckedUpdateInput>
  }

  /**
   * reference delete
   */
  export type referenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceInclude<ExtArgs> | null
    /**
     * Filter which reference to delete.
     */
    where: referenceWhereUniqueInput
  }

  /**
   * reference deleteMany
   */
  export type referenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which references to delete
     */
    where?: referenceWhereInput
    /**
     * Limit how many references to delete.
     */
    limit?: number
  }

  /**
   * reference without action
   */
  export type referenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reference
     */
    select?: referenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reference
     */
    omit?: referenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referenceInclude<ExtArgs> | null
  }


  /**
   * Model stake
   */

  export type AggregateStake = {
    _count: StakeCountAggregateOutputType | null
    _avg: StakeAvgAggregateOutputType | null
    _sum: StakeSumAggregateOutputType | null
    _min: StakeMinAggregateOutputType | null
    _max: StakeMaxAggregateOutputType | null
  }

  export type StakeAvgAggregateOutputType = {
    id: number | null
  }

  export type StakeSumAggregateOutputType = {
    id: number | null
  }

  export type StakeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StakeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StakeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type StakeAvgAggregateInputType = {
    id?: true
  }

  export type StakeSumAggregateInputType = {
    id?: true
  }

  export type StakeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type StakeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type StakeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type StakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stake to aggregate.
     */
    where?: stakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stakes to fetch.
     */
    orderBy?: stakeOrderByWithRelationInput | stakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stakes
    **/
    _count?: true | StakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StakeMaxAggregateInputType
  }

  export type GetStakeAggregateType<T extends StakeAggregateArgs> = {
        [P in keyof T & keyof AggregateStake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStake[P]>
      : GetScalarType<T[P], AggregateStake[P]>
  }




  export type stakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stakeWhereInput
    orderBy?: stakeOrderByWithAggregationInput | stakeOrderByWithAggregationInput[]
    by: StakeScalarFieldEnum[] | StakeScalarFieldEnum
    having?: stakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StakeCountAggregateInputType | true
    _avg?: StakeAvgAggregateInputType
    _sum?: StakeSumAggregateInputType
    _min?: StakeMinAggregateInputType
    _max?: StakeMaxAggregateInputType
  }

  export type StakeGroupByOutputType = {
    id: number
    name: string
    _count: StakeCountAggregateOutputType | null
    _avg: StakeAvgAggregateOutputType | null
    _sum: StakeSumAggregateOutputType | null
    _min: StakeMinAggregateOutputType | null
    _max: StakeMaxAggregateOutputType | null
  }

  type GetStakeGroupByPayload<T extends stakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StakeGroupByOutputType[P]>
            : GetScalarType<T[P], StakeGroupByOutputType[P]>
        }
      >
    >


  export type stakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["stake"]>

  export type stakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["stake"]>

  export type stakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["stake"]>

  export type stakeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type stakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["stake"]>

  export type $stakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stake"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["stake"]>
    composites: {}
  }

  type stakeGetPayload<S extends boolean | null | undefined | stakeDefaultArgs> = $Result.GetResult<Prisma.$stakePayload, S>

  type stakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stakeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StakeCountAggregateInputType | true
    }

  export interface stakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stake'], meta: { name: 'stake' } }
    /**
     * Find zero or one Stake that matches the filter.
     * @param {stakeFindUniqueArgs} args - Arguments to find a Stake
     * @example
     * // Get one Stake
     * const stake = await prisma.stake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stakeFindUniqueArgs>(args: SelectSubset<T, stakeFindUniqueArgs<ExtArgs>>): Prisma__stakeClient<$Result.GetResult<Prisma.$stakePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stakeFindUniqueOrThrowArgs} args - Arguments to find a Stake
     * @example
     * // Get one Stake
     * const stake = await prisma.stake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stakeFindUniqueOrThrowArgs>(args: SelectSubset<T, stakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stakeClient<$Result.GetResult<Prisma.$stakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stakeFindFirstArgs} args - Arguments to find a Stake
     * @example
     * // Get one Stake
     * const stake = await prisma.stake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stakeFindFirstArgs>(args?: SelectSubset<T, stakeFindFirstArgs<ExtArgs>>): Prisma__stakeClient<$Result.GetResult<Prisma.$stakePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stakeFindFirstOrThrowArgs} args - Arguments to find a Stake
     * @example
     * // Get one Stake
     * const stake = await prisma.stake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stakeFindFirstOrThrowArgs>(args?: SelectSubset<T, stakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__stakeClient<$Result.GetResult<Prisma.$stakePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stakes
     * const stakes = await prisma.stake.findMany()
     * 
     * // Get first 10 Stakes
     * const stakes = await prisma.stake.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stakeWithIdOnly = await prisma.stake.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stakeFindManyArgs>(args?: SelectSubset<T, stakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stake.
     * @param {stakeCreateArgs} args - Arguments to create a Stake.
     * @example
     * // Create one Stake
     * const Stake = await prisma.stake.create({
     *   data: {
     *     // ... data to create a Stake
     *   }
     * })
     * 
     */
    create<T extends stakeCreateArgs>(args: SelectSubset<T, stakeCreateArgs<ExtArgs>>): Prisma__stakeClient<$Result.GetResult<Prisma.$stakePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stakes.
     * @param {stakeCreateManyArgs} args - Arguments to create many Stakes.
     * @example
     * // Create many Stakes
     * const stake = await prisma.stake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stakeCreateManyArgs>(args?: SelectSubset<T, stakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stakes and returns the data saved in the database.
     * @param {stakeCreateManyAndReturnArgs} args - Arguments to create many Stakes.
     * @example
     * // Create many Stakes
     * const stake = await prisma.stake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stakes and only return the `id`
     * const stakeWithIdOnly = await prisma.stake.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stakeCreateManyAndReturnArgs>(args?: SelectSubset<T, stakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stakePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stake.
     * @param {stakeDeleteArgs} args - Arguments to delete one Stake.
     * @example
     * // Delete one Stake
     * const Stake = await prisma.stake.delete({
     *   where: {
     *     // ... filter to delete one Stake
     *   }
     * })
     * 
     */
    delete<T extends stakeDeleteArgs>(args: SelectSubset<T, stakeDeleteArgs<ExtArgs>>): Prisma__stakeClient<$Result.GetResult<Prisma.$stakePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stake.
     * @param {stakeUpdateArgs} args - Arguments to update one Stake.
     * @example
     * // Update one Stake
     * const stake = await prisma.stake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stakeUpdateArgs>(args: SelectSubset<T, stakeUpdateArgs<ExtArgs>>): Prisma__stakeClient<$Result.GetResult<Prisma.$stakePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stakes.
     * @param {stakeDeleteManyArgs} args - Arguments to filter Stakes to delete.
     * @example
     * // Delete a few Stakes
     * const { count } = await prisma.stake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stakeDeleteManyArgs>(args?: SelectSubset<T, stakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stakes
     * const stake = await prisma.stake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stakeUpdateManyArgs>(args: SelectSubset<T, stakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stakes and returns the data updated in the database.
     * @param {stakeUpdateManyAndReturnArgs} args - Arguments to update many Stakes.
     * @example
     * // Update many Stakes
     * const stake = await prisma.stake.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stakes and only return the `id`
     * const stakeWithIdOnly = await prisma.stake.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stakeUpdateManyAndReturnArgs>(args: SelectSubset<T, stakeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stakePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stake.
     * @param {stakeUpsertArgs} args - Arguments to update or create a Stake.
     * @example
     * // Update or create a Stake
     * const stake = await prisma.stake.upsert({
     *   create: {
     *     // ... data to create a Stake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stake we want to update
     *   }
     * })
     */
    upsert<T extends stakeUpsertArgs>(args: SelectSubset<T, stakeUpsertArgs<ExtArgs>>): Prisma__stakeClient<$Result.GetResult<Prisma.$stakePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stakeCountArgs} args - Arguments to filter Stakes to count.
     * @example
     * // Count the number of Stakes
     * const count = await prisma.stake.count({
     *   where: {
     *     // ... the filter for the Stakes we want to count
     *   }
     * })
    **/
    count<T extends stakeCountArgs>(
      args?: Subset<T, stakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StakeAggregateArgs>(args: Subset<T, StakeAggregateArgs>): Prisma.PrismaPromise<GetStakeAggregateType<T>>

    /**
     * Group by Stake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stakeGroupByArgs} args - Group by arguments.
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
      T extends stakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stakeGroupByArgs['orderBy'] }
        : { orderBy?: stakeGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stake model
   */
  readonly fields: stakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stake model
   */
  interface stakeFieldRefs {
    readonly id: FieldRef<"stake", 'Int'>
    readonly name: FieldRef<"stake", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stake findUnique
   */
  export type stakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stake
     */
    select?: stakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stake
     */
    omit?: stakeOmit<ExtArgs> | null
    /**
     * Filter, which stake to fetch.
     */
    where: stakeWhereUniqueInput
  }

  /**
   * stake findUniqueOrThrow
   */
  export type stakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stake
     */
    select?: stakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stake
     */
    omit?: stakeOmit<ExtArgs> | null
    /**
     * Filter, which stake to fetch.
     */
    where: stakeWhereUniqueInput
  }

  /**
   * stake findFirst
   */
  export type stakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stake
     */
    select?: stakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stake
     */
    omit?: stakeOmit<ExtArgs> | null
    /**
     * Filter, which stake to fetch.
     */
    where?: stakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stakes to fetch.
     */
    orderBy?: stakeOrderByWithRelationInput | stakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stakes.
     */
    cursor?: stakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stakes.
     */
    distinct?: StakeScalarFieldEnum | StakeScalarFieldEnum[]
  }

  /**
   * stake findFirstOrThrow
   */
  export type stakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stake
     */
    select?: stakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stake
     */
    omit?: stakeOmit<ExtArgs> | null
    /**
     * Filter, which stake to fetch.
     */
    where?: stakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stakes to fetch.
     */
    orderBy?: stakeOrderByWithRelationInput | stakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stakes.
     */
    cursor?: stakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stakes.
     */
    distinct?: StakeScalarFieldEnum | StakeScalarFieldEnum[]
  }

  /**
   * stake findMany
   */
  export type stakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stake
     */
    select?: stakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stake
     */
    omit?: stakeOmit<ExtArgs> | null
    /**
     * Filter, which stakes to fetch.
     */
    where?: stakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stakes to fetch.
     */
    orderBy?: stakeOrderByWithRelationInput | stakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stakes.
     */
    cursor?: stakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stakes.
     */
    skip?: number
    distinct?: StakeScalarFieldEnum | StakeScalarFieldEnum[]
  }

  /**
   * stake create
   */
  export type stakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stake
     */
    select?: stakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stake
     */
    omit?: stakeOmit<ExtArgs> | null
    /**
     * The data needed to create a stake.
     */
    data: XOR<stakeCreateInput, stakeUncheckedCreateInput>
  }

  /**
   * stake createMany
   */
  export type stakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stakes.
     */
    data: stakeCreateManyInput | stakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stake createManyAndReturn
   */
  export type stakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stake
     */
    select?: stakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stake
     */
    omit?: stakeOmit<ExtArgs> | null
    /**
     * The data used to create many stakes.
     */
    data: stakeCreateManyInput | stakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stake update
   */
  export type stakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stake
     */
    select?: stakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stake
     */
    omit?: stakeOmit<ExtArgs> | null
    /**
     * The data needed to update a stake.
     */
    data: XOR<stakeUpdateInput, stakeUncheckedUpdateInput>
    /**
     * Choose, which stake to update.
     */
    where: stakeWhereUniqueInput
  }

  /**
   * stake updateMany
   */
  export type stakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stakes.
     */
    data: XOR<stakeUpdateManyMutationInput, stakeUncheckedUpdateManyInput>
    /**
     * Filter which stakes to update
     */
    where?: stakeWhereInput
    /**
     * Limit how many stakes to update.
     */
    limit?: number
  }

  /**
   * stake updateManyAndReturn
   */
  export type stakeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stake
     */
    select?: stakeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stake
     */
    omit?: stakeOmit<ExtArgs> | null
    /**
     * The data used to update stakes.
     */
    data: XOR<stakeUpdateManyMutationInput, stakeUncheckedUpdateManyInput>
    /**
     * Filter which stakes to update
     */
    where?: stakeWhereInput
    /**
     * Limit how many stakes to update.
     */
    limit?: number
  }

  /**
   * stake upsert
   */
  export type stakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stake
     */
    select?: stakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stake
     */
    omit?: stakeOmit<ExtArgs> | null
    /**
     * The filter to search for the stake to update in case it exists.
     */
    where: stakeWhereUniqueInput
    /**
     * In case the stake found by the `where` argument doesn't exist, create a new stake with this data.
     */
    create: XOR<stakeCreateInput, stakeUncheckedCreateInput>
    /**
     * In case the stake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stakeUpdateInput, stakeUncheckedUpdateInput>
  }

  /**
   * stake delete
   */
  export type stakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stake
     */
    select?: stakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stake
     */
    omit?: stakeOmit<ExtArgs> | null
    /**
     * Filter which stake to delete.
     */
    where: stakeWhereUniqueInput
  }

  /**
   * stake deleteMany
   */
  export type stakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stakes to delete
     */
    where?: stakeWhereInput
    /**
     * Limit how many stakes to delete.
     */
    limit?: number
  }

  /**
   * stake without action
   */
  export type stakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stake
     */
    select?: stakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stake
     */
    omit?: stakeOmit<ExtArgs> | null
  }


  /**
   * Model stop_teaching_reason
   */

  export type AggregateStop_teaching_reason = {
    _count: Stop_teaching_reasonCountAggregateOutputType | null
    _avg: Stop_teaching_reasonAvgAggregateOutputType | null
    _sum: Stop_teaching_reasonSumAggregateOutputType | null
    _min: Stop_teaching_reasonMinAggregateOutputType | null
    _max: Stop_teaching_reasonMaxAggregateOutputType | null
  }

  export type Stop_teaching_reasonAvgAggregateOutputType = {
    id: number | null
  }

  export type Stop_teaching_reasonSumAggregateOutputType = {
    id: number | null
  }

  export type Stop_teaching_reasonMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Stop_teaching_reasonMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Stop_teaching_reasonCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Stop_teaching_reasonAvgAggregateInputType = {
    id?: true
  }

  export type Stop_teaching_reasonSumAggregateInputType = {
    id?: true
  }

  export type Stop_teaching_reasonMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Stop_teaching_reasonMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Stop_teaching_reasonCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Stop_teaching_reasonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stop_teaching_reason to aggregate.
     */
    where?: stop_teaching_reasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stop_teaching_reasons to fetch.
     */
    orderBy?: stop_teaching_reasonOrderByWithRelationInput | stop_teaching_reasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stop_teaching_reasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stop_teaching_reasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stop_teaching_reasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stop_teaching_reasons
    **/
    _count?: true | Stop_teaching_reasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stop_teaching_reasonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stop_teaching_reasonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stop_teaching_reasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stop_teaching_reasonMaxAggregateInputType
  }

  export type GetStop_teaching_reasonAggregateType<T extends Stop_teaching_reasonAggregateArgs> = {
        [P in keyof T & keyof AggregateStop_teaching_reason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStop_teaching_reason[P]>
      : GetScalarType<T[P], AggregateStop_teaching_reason[P]>
  }




  export type stop_teaching_reasonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stop_teaching_reasonWhereInput
    orderBy?: stop_teaching_reasonOrderByWithAggregationInput | stop_teaching_reasonOrderByWithAggregationInput[]
    by: Stop_teaching_reasonScalarFieldEnum[] | Stop_teaching_reasonScalarFieldEnum
    having?: stop_teaching_reasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stop_teaching_reasonCountAggregateInputType | true
    _avg?: Stop_teaching_reasonAvgAggregateInputType
    _sum?: Stop_teaching_reasonSumAggregateInputType
    _min?: Stop_teaching_reasonMinAggregateInputType
    _max?: Stop_teaching_reasonMaxAggregateInputType
  }

  export type Stop_teaching_reasonGroupByOutputType = {
    id: number
    name: string
    _count: Stop_teaching_reasonCountAggregateOutputType | null
    _avg: Stop_teaching_reasonAvgAggregateOutputType | null
    _sum: Stop_teaching_reasonSumAggregateOutputType | null
    _min: Stop_teaching_reasonMinAggregateOutputType | null
    _max: Stop_teaching_reasonMaxAggregateOutputType | null
  }

  type GetStop_teaching_reasonGroupByPayload<T extends stop_teaching_reasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stop_teaching_reasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stop_teaching_reasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stop_teaching_reasonGroupByOutputType[P]>
            : GetScalarType<T[P], Stop_teaching_reasonGroupByOutputType[P]>
        }
      >
    >


  export type stop_teaching_reasonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["stop_teaching_reason"]>

  export type stop_teaching_reasonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["stop_teaching_reason"]>

  export type stop_teaching_reasonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["stop_teaching_reason"]>

  export type stop_teaching_reasonSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type stop_teaching_reasonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["stop_teaching_reason"]>

  export type $stop_teaching_reasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stop_teaching_reason"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["stop_teaching_reason"]>
    composites: {}
  }

  type stop_teaching_reasonGetPayload<S extends boolean | null | undefined | stop_teaching_reasonDefaultArgs> = $Result.GetResult<Prisma.$stop_teaching_reasonPayload, S>

  type stop_teaching_reasonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stop_teaching_reasonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stop_teaching_reasonCountAggregateInputType | true
    }

  export interface stop_teaching_reasonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stop_teaching_reason'], meta: { name: 'stop_teaching_reason' } }
    /**
     * Find zero or one Stop_teaching_reason that matches the filter.
     * @param {stop_teaching_reasonFindUniqueArgs} args - Arguments to find a Stop_teaching_reason
     * @example
     * // Get one Stop_teaching_reason
     * const stop_teaching_reason = await prisma.stop_teaching_reason.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stop_teaching_reasonFindUniqueArgs>(args: SelectSubset<T, stop_teaching_reasonFindUniqueArgs<ExtArgs>>): Prisma__stop_teaching_reasonClient<$Result.GetResult<Prisma.$stop_teaching_reasonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stop_teaching_reason that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stop_teaching_reasonFindUniqueOrThrowArgs} args - Arguments to find a Stop_teaching_reason
     * @example
     * // Get one Stop_teaching_reason
     * const stop_teaching_reason = await prisma.stop_teaching_reason.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stop_teaching_reasonFindUniqueOrThrowArgs>(args: SelectSubset<T, stop_teaching_reasonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stop_teaching_reasonClient<$Result.GetResult<Prisma.$stop_teaching_reasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stop_teaching_reason that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stop_teaching_reasonFindFirstArgs} args - Arguments to find a Stop_teaching_reason
     * @example
     * // Get one Stop_teaching_reason
     * const stop_teaching_reason = await prisma.stop_teaching_reason.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stop_teaching_reasonFindFirstArgs>(args?: SelectSubset<T, stop_teaching_reasonFindFirstArgs<ExtArgs>>): Prisma__stop_teaching_reasonClient<$Result.GetResult<Prisma.$stop_teaching_reasonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stop_teaching_reason that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stop_teaching_reasonFindFirstOrThrowArgs} args - Arguments to find a Stop_teaching_reason
     * @example
     * // Get one Stop_teaching_reason
     * const stop_teaching_reason = await prisma.stop_teaching_reason.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stop_teaching_reasonFindFirstOrThrowArgs>(args?: SelectSubset<T, stop_teaching_reasonFindFirstOrThrowArgs<ExtArgs>>): Prisma__stop_teaching_reasonClient<$Result.GetResult<Prisma.$stop_teaching_reasonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stop_teaching_reasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stop_teaching_reasonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stop_teaching_reasons
     * const stop_teaching_reasons = await prisma.stop_teaching_reason.findMany()
     * 
     * // Get first 10 Stop_teaching_reasons
     * const stop_teaching_reasons = await prisma.stop_teaching_reason.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stop_teaching_reasonWithIdOnly = await prisma.stop_teaching_reason.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stop_teaching_reasonFindManyArgs>(args?: SelectSubset<T, stop_teaching_reasonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stop_teaching_reasonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stop_teaching_reason.
     * @param {stop_teaching_reasonCreateArgs} args - Arguments to create a Stop_teaching_reason.
     * @example
     * // Create one Stop_teaching_reason
     * const Stop_teaching_reason = await prisma.stop_teaching_reason.create({
     *   data: {
     *     // ... data to create a Stop_teaching_reason
     *   }
     * })
     * 
     */
    create<T extends stop_teaching_reasonCreateArgs>(args: SelectSubset<T, stop_teaching_reasonCreateArgs<ExtArgs>>): Prisma__stop_teaching_reasonClient<$Result.GetResult<Prisma.$stop_teaching_reasonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stop_teaching_reasons.
     * @param {stop_teaching_reasonCreateManyArgs} args - Arguments to create many Stop_teaching_reasons.
     * @example
     * // Create many Stop_teaching_reasons
     * const stop_teaching_reason = await prisma.stop_teaching_reason.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stop_teaching_reasonCreateManyArgs>(args?: SelectSubset<T, stop_teaching_reasonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stop_teaching_reasons and returns the data saved in the database.
     * @param {stop_teaching_reasonCreateManyAndReturnArgs} args - Arguments to create many Stop_teaching_reasons.
     * @example
     * // Create many Stop_teaching_reasons
     * const stop_teaching_reason = await prisma.stop_teaching_reason.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stop_teaching_reasons and only return the `id`
     * const stop_teaching_reasonWithIdOnly = await prisma.stop_teaching_reason.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stop_teaching_reasonCreateManyAndReturnArgs>(args?: SelectSubset<T, stop_teaching_reasonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stop_teaching_reasonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stop_teaching_reason.
     * @param {stop_teaching_reasonDeleteArgs} args - Arguments to delete one Stop_teaching_reason.
     * @example
     * // Delete one Stop_teaching_reason
     * const Stop_teaching_reason = await prisma.stop_teaching_reason.delete({
     *   where: {
     *     // ... filter to delete one Stop_teaching_reason
     *   }
     * })
     * 
     */
    delete<T extends stop_teaching_reasonDeleteArgs>(args: SelectSubset<T, stop_teaching_reasonDeleteArgs<ExtArgs>>): Prisma__stop_teaching_reasonClient<$Result.GetResult<Prisma.$stop_teaching_reasonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stop_teaching_reason.
     * @param {stop_teaching_reasonUpdateArgs} args - Arguments to update one Stop_teaching_reason.
     * @example
     * // Update one Stop_teaching_reason
     * const stop_teaching_reason = await prisma.stop_teaching_reason.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stop_teaching_reasonUpdateArgs>(args: SelectSubset<T, stop_teaching_reasonUpdateArgs<ExtArgs>>): Prisma__stop_teaching_reasonClient<$Result.GetResult<Prisma.$stop_teaching_reasonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stop_teaching_reasons.
     * @param {stop_teaching_reasonDeleteManyArgs} args - Arguments to filter Stop_teaching_reasons to delete.
     * @example
     * // Delete a few Stop_teaching_reasons
     * const { count } = await prisma.stop_teaching_reason.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stop_teaching_reasonDeleteManyArgs>(args?: SelectSubset<T, stop_teaching_reasonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stop_teaching_reasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stop_teaching_reasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stop_teaching_reasons
     * const stop_teaching_reason = await prisma.stop_teaching_reason.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stop_teaching_reasonUpdateManyArgs>(args: SelectSubset<T, stop_teaching_reasonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stop_teaching_reasons and returns the data updated in the database.
     * @param {stop_teaching_reasonUpdateManyAndReturnArgs} args - Arguments to update many Stop_teaching_reasons.
     * @example
     * // Update many Stop_teaching_reasons
     * const stop_teaching_reason = await prisma.stop_teaching_reason.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stop_teaching_reasons and only return the `id`
     * const stop_teaching_reasonWithIdOnly = await prisma.stop_teaching_reason.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stop_teaching_reasonUpdateManyAndReturnArgs>(args: SelectSubset<T, stop_teaching_reasonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stop_teaching_reasonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stop_teaching_reason.
     * @param {stop_teaching_reasonUpsertArgs} args - Arguments to update or create a Stop_teaching_reason.
     * @example
     * // Update or create a Stop_teaching_reason
     * const stop_teaching_reason = await prisma.stop_teaching_reason.upsert({
     *   create: {
     *     // ... data to create a Stop_teaching_reason
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stop_teaching_reason we want to update
     *   }
     * })
     */
    upsert<T extends stop_teaching_reasonUpsertArgs>(args: SelectSubset<T, stop_teaching_reasonUpsertArgs<ExtArgs>>): Prisma__stop_teaching_reasonClient<$Result.GetResult<Prisma.$stop_teaching_reasonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stop_teaching_reasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stop_teaching_reasonCountArgs} args - Arguments to filter Stop_teaching_reasons to count.
     * @example
     * // Count the number of Stop_teaching_reasons
     * const count = await prisma.stop_teaching_reason.count({
     *   where: {
     *     // ... the filter for the Stop_teaching_reasons we want to count
     *   }
     * })
    **/
    count<T extends stop_teaching_reasonCountArgs>(
      args?: Subset<T, stop_teaching_reasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stop_teaching_reasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stop_teaching_reason.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stop_teaching_reasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Stop_teaching_reasonAggregateArgs>(args: Subset<T, Stop_teaching_reasonAggregateArgs>): Prisma.PrismaPromise<GetStop_teaching_reasonAggregateType<T>>

    /**
     * Group by Stop_teaching_reason.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stop_teaching_reasonGroupByArgs} args - Group by arguments.
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
      T extends stop_teaching_reasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stop_teaching_reasonGroupByArgs['orderBy'] }
        : { orderBy?: stop_teaching_reasonGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stop_teaching_reasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStop_teaching_reasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stop_teaching_reason model
   */
  readonly fields: stop_teaching_reasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stop_teaching_reason.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stop_teaching_reasonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stop_teaching_reason model
   */
  interface stop_teaching_reasonFieldRefs {
    readonly id: FieldRef<"stop_teaching_reason", 'Int'>
    readonly name: FieldRef<"stop_teaching_reason", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stop_teaching_reason findUnique
   */
  export type stop_teaching_reasonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop_teaching_reason
     */
    select?: stop_teaching_reasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stop_teaching_reason
     */
    omit?: stop_teaching_reasonOmit<ExtArgs> | null
    /**
     * Filter, which stop_teaching_reason to fetch.
     */
    where: stop_teaching_reasonWhereUniqueInput
  }

  /**
   * stop_teaching_reason findUniqueOrThrow
   */
  export type stop_teaching_reasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop_teaching_reason
     */
    select?: stop_teaching_reasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stop_teaching_reason
     */
    omit?: stop_teaching_reasonOmit<ExtArgs> | null
    /**
     * Filter, which stop_teaching_reason to fetch.
     */
    where: stop_teaching_reasonWhereUniqueInput
  }

  /**
   * stop_teaching_reason findFirst
   */
  export type stop_teaching_reasonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop_teaching_reason
     */
    select?: stop_teaching_reasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stop_teaching_reason
     */
    omit?: stop_teaching_reasonOmit<ExtArgs> | null
    /**
     * Filter, which stop_teaching_reason to fetch.
     */
    where?: stop_teaching_reasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stop_teaching_reasons to fetch.
     */
    orderBy?: stop_teaching_reasonOrderByWithRelationInput | stop_teaching_reasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stop_teaching_reasons.
     */
    cursor?: stop_teaching_reasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stop_teaching_reasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stop_teaching_reasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stop_teaching_reasons.
     */
    distinct?: Stop_teaching_reasonScalarFieldEnum | Stop_teaching_reasonScalarFieldEnum[]
  }

  /**
   * stop_teaching_reason findFirstOrThrow
   */
  export type stop_teaching_reasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop_teaching_reason
     */
    select?: stop_teaching_reasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stop_teaching_reason
     */
    omit?: stop_teaching_reasonOmit<ExtArgs> | null
    /**
     * Filter, which stop_teaching_reason to fetch.
     */
    where?: stop_teaching_reasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stop_teaching_reasons to fetch.
     */
    orderBy?: stop_teaching_reasonOrderByWithRelationInput | stop_teaching_reasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stop_teaching_reasons.
     */
    cursor?: stop_teaching_reasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stop_teaching_reasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stop_teaching_reasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stop_teaching_reasons.
     */
    distinct?: Stop_teaching_reasonScalarFieldEnum | Stop_teaching_reasonScalarFieldEnum[]
  }

  /**
   * stop_teaching_reason findMany
   */
  export type stop_teaching_reasonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop_teaching_reason
     */
    select?: stop_teaching_reasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stop_teaching_reason
     */
    omit?: stop_teaching_reasonOmit<ExtArgs> | null
    /**
     * Filter, which stop_teaching_reasons to fetch.
     */
    where?: stop_teaching_reasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stop_teaching_reasons to fetch.
     */
    orderBy?: stop_teaching_reasonOrderByWithRelationInput | stop_teaching_reasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stop_teaching_reasons.
     */
    cursor?: stop_teaching_reasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stop_teaching_reasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stop_teaching_reasons.
     */
    skip?: number
    distinct?: Stop_teaching_reasonScalarFieldEnum | Stop_teaching_reasonScalarFieldEnum[]
  }

  /**
   * stop_teaching_reason create
   */
  export type stop_teaching_reasonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop_teaching_reason
     */
    select?: stop_teaching_reasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stop_teaching_reason
     */
    omit?: stop_teaching_reasonOmit<ExtArgs> | null
    /**
     * The data needed to create a stop_teaching_reason.
     */
    data: XOR<stop_teaching_reasonCreateInput, stop_teaching_reasonUncheckedCreateInput>
  }

  /**
   * stop_teaching_reason createMany
   */
  export type stop_teaching_reasonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stop_teaching_reasons.
     */
    data: stop_teaching_reasonCreateManyInput | stop_teaching_reasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stop_teaching_reason createManyAndReturn
   */
  export type stop_teaching_reasonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop_teaching_reason
     */
    select?: stop_teaching_reasonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stop_teaching_reason
     */
    omit?: stop_teaching_reasonOmit<ExtArgs> | null
    /**
     * The data used to create many stop_teaching_reasons.
     */
    data: stop_teaching_reasonCreateManyInput | stop_teaching_reasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stop_teaching_reason update
   */
  export type stop_teaching_reasonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop_teaching_reason
     */
    select?: stop_teaching_reasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stop_teaching_reason
     */
    omit?: stop_teaching_reasonOmit<ExtArgs> | null
    /**
     * The data needed to update a stop_teaching_reason.
     */
    data: XOR<stop_teaching_reasonUpdateInput, stop_teaching_reasonUncheckedUpdateInput>
    /**
     * Choose, which stop_teaching_reason to update.
     */
    where: stop_teaching_reasonWhereUniqueInput
  }

  /**
   * stop_teaching_reason updateMany
   */
  export type stop_teaching_reasonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stop_teaching_reasons.
     */
    data: XOR<stop_teaching_reasonUpdateManyMutationInput, stop_teaching_reasonUncheckedUpdateManyInput>
    /**
     * Filter which stop_teaching_reasons to update
     */
    where?: stop_teaching_reasonWhereInput
    /**
     * Limit how many stop_teaching_reasons to update.
     */
    limit?: number
  }

  /**
   * stop_teaching_reason updateManyAndReturn
   */
  export type stop_teaching_reasonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop_teaching_reason
     */
    select?: stop_teaching_reasonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stop_teaching_reason
     */
    omit?: stop_teaching_reasonOmit<ExtArgs> | null
    /**
     * The data used to update stop_teaching_reasons.
     */
    data: XOR<stop_teaching_reasonUpdateManyMutationInput, stop_teaching_reasonUncheckedUpdateManyInput>
    /**
     * Filter which stop_teaching_reasons to update
     */
    where?: stop_teaching_reasonWhereInput
    /**
     * Limit how many stop_teaching_reasons to update.
     */
    limit?: number
  }

  /**
   * stop_teaching_reason upsert
   */
  export type stop_teaching_reasonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop_teaching_reason
     */
    select?: stop_teaching_reasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stop_teaching_reason
     */
    omit?: stop_teaching_reasonOmit<ExtArgs> | null
    /**
     * The filter to search for the stop_teaching_reason to update in case it exists.
     */
    where: stop_teaching_reasonWhereUniqueInput
    /**
     * In case the stop_teaching_reason found by the `where` argument doesn't exist, create a new stop_teaching_reason with this data.
     */
    create: XOR<stop_teaching_reasonCreateInput, stop_teaching_reasonUncheckedCreateInput>
    /**
     * In case the stop_teaching_reason was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stop_teaching_reasonUpdateInput, stop_teaching_reasonUncheckedUpdateInput>
  }

  /**
   * stop_teaching_reason delete
   */
  export type stop_teaching_reasonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop_teaching_reason
     */
    select?: stop_teaching_reasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stop_teaching_reason
     */
    omit?: stop_teaching_reasonOmit<ExtArgs> | null
    /**
     * Filter which stop_teaching_reason to delete.
     */
    where: stop_teaching_reasonWhereUniqueInput
  }

  /**
   * stop_teaching_reason deleteMany
   */
  export type stop_teaching_reasonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stop_teaching_reasons to delete
     */
    where?: stop_teaching_reasonWhereInput
    /**
     * Limit how many stop_teaching_reasons to delete.
     */
    limit?: number
  }

  /**
   * stop_teaching_reason without action
   */
  export type stop_teaching_reasonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop_teaching_reason
     */
    select?: stop_teaching_reasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stop_teaching_reason
     */
    omit?: stop_teaching_reasonOmit<ExtArgs> | null
  }


  /**
   * Model uba_area
   */

  export type AggregateUba_area = {
    _count: Uba_areaCountAggregateOutputType | null
    _avg: Uba_areaAvgAggregateOutputType | null
    _sum: Uba_areaSumAggregateOutputType | null
    _min: Uba_areaMinAggregateOutputType | null
    _max: Uba_areaMaxAggregateOutputType | null
  }

  export type Uba_areaAvgAggregateOutputType = {
    id: number | null
  }

  export type Uba_areaSumAggregateOutputType = {
    id: number | null
  }

  export type Uba_areaMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Uba_areaMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Uba_areaCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Uba_areaAvgAggregateInputType = {
    id?: true
  }

  export type Uba_areaSumAggregateInputType = {
    id?: true
  }

  export type Uba_areaMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Uba_areaMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Uba_areaCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Uba_areaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uba_area to aggregate.
     */
    where?: uba_areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uba_areas to fetch.
     */
    orderBy?: uba_areaOrderByWithRelationInput | uba_areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: uba_areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uba_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uba_areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned uba_areas
    **/
    _count?: true | Uba_areaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Uba_areaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Uba_areaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Uba_areaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Uba_areaMaxAggregateInputType
  }

  export type GetUba_areaAggregateType<T extends Uba_areaAggregateArgs> = {
        [P in keyof T & keyof AggregateUba_area]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUba_area[P]>
      : GetScalarType<T[P], AggregateUba_area[P]>
  }




  export type uba_areaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: uba_areaWhereInput
    orderBy?: uba_areaOrderByWithAggregationInput | uba_areaOrderByWithAggregationInput[]
    by: Uba_areaScalarFieldEnum[] | Uba_areaScalarFieldEnum
    having?: uba_areaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Uba_areaCountAggregateInputType | true
    _avg?: Uba_areaAvgAggregateInputType
    _sum?: Uba_areaSumAggregateInputType
    _min?: Uba_areaMinAggregateInputType
    _max?: Uba_areaMaxAggregateInputType
  }

  export type Uba_areaGroupByOutputType = {
    id: number
    name: string
    _count: Uba_areaCountAggregateOutputType | null
    _avg: Uba_areaAvgAggregateOutputType | null
    _sum: Uba_areaSumAggregateOutputType | null
    _min: Uba_areaMinAggregateOutputType | null
    _max: Uba_areaMaxAggregateOutputType | null
  }

  type GetUba_areaGroupByPayload<T extends uba_areaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Uba_areaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Uba_areaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Uba_areaGroupByOutputType[P]>
            : GetScalarType<T[P], Uba_areaGroupByOutputType[P]>
        }
      >
    >


  export type uba_areaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["uba_area"]>

  export type uba_areaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["uba_area"]>

  export type uba_areaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["uba_area"]>

  export type uba_areaSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type uba_areaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["uba_area"]>

  export type $uba_areaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "uba_area"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["uba_area"]>
    composites: {}
  }

  type uba_areaGetPayload<S extends boolean | null | undefined | uba_areaDefaultArgs> = $Result.GetResult<Prisma.$uba_areaPayload, S>

  type uba_areaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<uba_areaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Uba_areaCountAggregateInputType | true
    }

  export interface uba_areaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['uba_area'], meta: { name: 'uba_area' } }
    /**
     * Find zero or one Uba_area that matches the filter.
     * @param {uba_areaFindUniqueArgs} args - Arguments to find a Uba_area
     * @example
     * // Get one Uba_area
     * const uba_area = await prisma.uba_area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends uba_areaFindUniqueArgs>(args: SelectSubset<T, uba_areaFindUniqueArgs<ExtArgs>>): Prisma__uba_areaClient<$Result.GetResult<Prisma.$uba_areaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Uba_area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {uba_areaFindUniqueOrThrowArgs} args - Arguments to find a Uba_area
     * @example
     * // Get one Uba_area
     * const uba_area = await prisma.uba_area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends uba_areaFindUniqueOrThrowArgs>(args: SelectSubset<T, uba_areaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__uba_areaClient<$Result.GetResult<Prisma.$uba_areaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uba_area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uba_areaFindFirstArgs} args - Arguments to find a Uba_area
     * @example
     * // Get one Uba_area
     * const uba_area = await prisma.uba_area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends uba_areaFindFirstArgs>(args?: SelectSubset<T, uba_areaFindFirstArgs<ExtArgs>>): Prisma__uba_areaClient<$Result.GetResult<Prisma.$uba_areaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uba_area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uba_areaFindFirstOrThrowArgs} args - Arguments to find a Uba_area
     * @example
     * // Get one Uba_area
     * const uba_area = await prisma.uba_area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends uba_areaFindFirstOrThrowArgs>(args?: SelectSubset<T, uba_areaFindFirstOrThrowArgs<ExtArgs>>): Prisma__uba_areaClient<$Result.GetResult<Prisma.$uba_areaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Uba_areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uba_areaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Uba_areas
     * const uba_areas = await prisma.uba_area.findMany()
     * 
     * // Get first 10 Uba_areas
     * const uba_areas = await prisma.uba_area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uba_areaWithIdOnly = await prisma.uba_area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends uba_areaFindManyArgs>(args?: SelectSubset<T, uba_areaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uba_areaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Uba_area.
     * @param {uba_areaCreateArgs} args - Arguments to create a Uba_area.
     * @example
     * // Create one Uba_area
     * const Uba_area = await prisma.uba_area.create({
     *   data: {
     *     // ... data to create a Uba_area
     *   }
     * })
     * 
     */
    create<T extends uba_areaCreateArgs>(args: SelectSubset<T, uba_areaCreateArgs<ExtArgs>>): Prisma__uba_areaClient<$Result.GetResult<Prisma.$uba_areaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Uba_areas.
     * @param {uba_areaCreateManyArgs} args - Arguments to create many Uba_areas.
     * @example
     * // Create many Uba_areas
     * const uba_area = await prisma.uba_area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends uba_areaCreateManyArgs>(args?: SelectSubset<T, uba_areaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Uba_areas and returns the data saved in the database.
     * @param {uba_areaCreateManyAndReturnArgs} args - Arguments to create many Uba_areas.
     * @example
     * // Create many Uba_areas
     * const uba_area = await prisma.uba_area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Uba_areas and only return the `id`
     * const uba_areaWithIdOnly = await prisma.uba_area.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends uba_areaCreateManyAndReturnArgs>(args?: SelectSubset<T, uba_areaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uba_areaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Uba_area.
     * @param {uba_areaDeleteArgs} args - Arguments to delete one Uba_area.
     * @example
     * // Delete one Uba_area
     * const Uba_area = await prisma.uba_area.delete({
     *   where: {
     *     // ... filter to delete one Uba_area
     *   }
     * })
     * 
     */
    delete<T extends uba_areaDeleteArgs>(args: SelectSubset<T, uba_areaDeleteArgs<ExtArgs>>): Prisma__uba_areaClient<$Result.GetResult<Prisma.$uba_areaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Uba_area.
     * @param {uba_areaUpdateArgs} args - Arguments to update one Uba_area.
     * @example
     * // Update one Uba_area
     * const uba_area = await prisma.uba_area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends uba_areaUpdateArgs>(args: SelectSubset<T, uba_areaUpdateArgs<ExtArgs>>): Prisma__uba_areaClient<$Result.GetResult<Prisma.$uba_areaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Uba_areas.
     * @param {uba_areaDeleteManyArgs} args - Arguments to filter Uba_areas to delete.
     * @example
     * // Delete a few Uba_areas
     * const { count } = await prisma.uba_area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends uba_areaDeleteManyArgs>(args?: SelectSubset<T, uba_areaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uba_areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uba_areaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Uba_areas
     * const uba_area = await prisma.uba_area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends uba_areaUpdateManyArgs>(args: SelectSubset<T, uba_areaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uba_areas and returns the data updated in the database.
     * @param {uba_areaUpdateManyAndReturnArgs} args - Arguments to update many Uba_areas.
     * @example
     * // Update many Uba_areas
     * const uba_area = await prisma.uba_area.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Uba_areas and only return the `id`
     * const uba_areaWithIdOnly = await prisma.uba_area.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends uba_areaUpdateManyAndReturnArgs>(args: SelectSubset<T, uba_areaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uba_areaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Uba_area.
     * @param {uba_areaUpsertArgs} args - Arguments to update or create a Uba_area.
     * @example
     * // Update or create a Uba_area
     * const uba_area = await prisma.uba_area.upsert({
     *   create: {
     *     // ... data to create a Uba_area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Uba_area we want to update
     *   }
     * })
     */
    upsert<T extends uba_areaUpsertArgs>(args: SelectSubset<T, uba_areaUpsertArgs<ExtArgs>>): Prisma__uba_areaClient<$Result.GetResult<Prisma.$uba_areaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Uba_areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uba_areaCountArgs} args - Arguments to filter Uba_areas to count.
     * @example
     * // Count the number of Uba_areas
     * const count = await prisma.uba_area.count({
     *   where: {
     *     // ... the filter for the Uba_areas we want to count
     *   }
     * })
    **/
    count<T extends uba_areaCountArgs>(
      args?: Subset<T, uba_areaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Uba_areaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Uba_area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Uba_areaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Uba_areaAggregateArgs>(args: Subset<T, Uba_areaAggregateArgs>): Prisma.PrismaPromise<GetUba_areaAggregateType<T>>

    /**
     * Group by Uba_area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uba_areaGroupByArgs} args - Group by arguments.
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
      T extends uba_areaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: uba_areaGroupByArgs['orderBy'] }
        : { orderBy?: uba_areaGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, uba_areaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUba_areaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the uba_area model
   */
  readonly fields: uba_areaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for uba_area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__uba_areaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the uba_area model
   */
  interface uba_areaFieldRefs {
    readonly id: FieldRef<"uba_area", 'Int'>
    readonly name: FieldRef<"uba_area", 'String'>
  }
    

  // Custom InputTypes
  /**
   * uba_area findUnique
   */
  export type uba_areaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uba_area
     */
    select?: uba_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uba_area
     */
    omit?: uba_areaOmit<ExtArgs> | null
    /**
     * Filter, which uba_area to fetch.
     */
    where: uba_areaWhereUniqueInput
  }

  /**
   * uba_area findUniqueOrThrow
   */
  export type uba_areaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uba_area
     */
    select?: uba_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uba_area
     */
    omit?: uba_areaOmit<ExtArgs> | null
    /**
     * Filter, which uba_area to fetch.
     */
    where: uba_areaWhereUniqueInput
  }

  /**
   * uba_area findFirst
   */
  export type uba_areaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uba_area
     */
    select?: uba_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uba_area
     */
    omit?: uba_areaOmit<ExtArgs> | null
    /**
     * Filter, which uba_area to fetch.
     */
    where?: uba_areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uba_areas to fetch.
     */
    orderBy?: uba_areaOrderByWithRelationInput | uba_areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uba_areas.
     */
    cursor?: uba_areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uba_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uba_areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uba_areas.
     */
    distinct?: Uba_areaScalarFieldEnum | Uba_areaScalarFieldEnum[]
  }

  /**
   * uba_area findFirstOrThrow
   */
  export type uba_areaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uba_area
     */
    select?: uba_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uba_area
     */
    omit?: uba_areaOmit<ExtArgs> | null
    /**
     * Filter, which uba_area to fetch.
     */
    where?: uba_areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uba_areas to fetch.
     */
    orderBy?: uba_areaOrderByWithRelationInput | uba_areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uba_areas.
     */
    cursor?: uba_areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uba_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uba_areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uba_areas.
     */
    distinct?: Uba_areaScalarFieldEnum | Uba_areaScalarFieldEnum[]
  }

  /**
   * uba_area findMany
   */
  export type uba_areaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uba_area
     */
    select?: uba_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uba_area
     */
    omit?: uba_areaOmit<ExtArgs> | null
    /**
     * Filter, which uba_areas to fetch.
     */
    where?: uba_areaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uba_areas to fetch.
     */
    orderBy?: uba_areaOrderByWithRelationInput | uba_areaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing uba_areas.
     */
    cursor?: uba_areaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uba_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uba_areas.
     */
    skip?: number
    distinct?: Uba_areaScalarFieldEnum | Uba_areaScalarFieldEnum[]
  }

  /**
   * uba_area create
   */
  export type uba_areaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uba_area
     */
    select?: uba_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uba_area
     */
    omit?: uba_areaOmit<ExtArgs> | null
    /**
     * The data needed to create a uba_area.
     */
    data: XOR<uba_areaCreateInput, uba_areaUncheckedCreateInput>
  }

  /**
   * uba_area createMany
   */
  export type uba_areaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many uba_areas.
     */
    data: uba_areaCreateManyInput | uba_areaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * uba_area createManyAndReturn
   */
  export type uba_areaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uba_area
     */
    select?: uba_areaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the uba_area
     */
    omit?: uba_areaOmit<ExtArgs> | null
    /**
     * The data used to create many uba_areas.
     */
    data: uba_areaCreateManyInput | uba_areaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * uba_area update
   */
  export type uba_areaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uba_area
     */
    select?: uba_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uba_area
     */
    omit?: uba_areaOmit<ExtArgs> | null
    /**
     * The data needed to update a uba_area.
     */
    data: XOR<uba_areaUpdateInput, uba_areaUncheckedUpdateInput>
    /**
     * Choose, which uba_area to update.
     */
    where: uba_areaWhereUniqueInput
  }

  /**
   * uba_area updateMany
   */
  export type uba_areaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update uba_areas.
     */
    data: XOR<uba_areaUpdateManyMutationInput, uba_areaUncheckedUpdateManyInput>
    /**
     * Filter which uba_areas to update
     */
    where?: uba_areaWhereInput
    /**
     * Limit how many uba_areas to update.
     */
    limit?: number
  }

  /**
   * uba_area updateManyAndReturn
   */
  export type uba_areaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uba_area
     */
    select?: uba_areaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the uba_area
     */
    omit?: uba_areaOmit<ExtArgs> | null
    /**
     * The data used to update uba_areas.
     */
    data: XOR<uba_areaUpdateManyMutationInput, uba_areaUncheckedUpdateManyInput>
    /**
     * Filter which uba_areas to update
     */
    where?: uba_areaWhereInput
    /**
     * Limit how many uba_areas to update.
     */
    limit?: number
  }

  /**
   * uba_area upsert
   */
  export type uba_areaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uba_area
     */
    select?: uba_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uba_area
     */
    omit?: uba_areaOmit<ExtArgs> | null
    /**
     * The filter to search for the uba_area to update in case it exists.
     */
    where: uba_areaWhereUniqueInput
    /**
     * In case the uba_area found by the `where` argument doesn't exist, create a new uba_area with this data.
     */
    create: XOR<uba_areaCreateInput, uba_areaUncheckedCreateInput>
    /**
     * In case the uba_area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<uba_areaUpdateInput, uba_areaUncheckedUpdateInput>
  }

  /**
   * uba_area delete
   */
  export type uba_areaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uba_area
     */
    select?: uba_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uba_area
     */
    omit?: uba_areaOmit<ExtArgs> | null
    /**
     * Filter which uba_area to delete.
     */
    where: uba_areaWhereUniqueInput
  }

  /**
   * uba_area deleteMany
   */
  export type uba_areaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uba_areas to delete
     */
    where?: uba_areaWhereInput
    /**
     * Limit how many uba_areas to delete.
     */
    limit?: number
  }

  /**
   * uba_area without action
   */
  export type uba_areaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uba_area
     */
    select?: uba_areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uba_area
     */
    omit?: uba_areaOmit<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    is_active: boolean | null
    create_date: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    is_active: boolean | null
    create_date: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    name: number
    is_active: number
    create_date: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    name?: true
    is_active?: true
    create_date?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    name?: true
    is_active?: true
    create_date?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    name?: true
    is_active?: true
    create_date?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    name: string
    is_active: boolean | null
    create_date: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    is_active?: boolean
    create_date?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    is_active?: boolean
    create_date?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    is_active?: boolean
    create_date?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    user_id?: boolean
    name?: boolean
    is_active?: boolean
    create_date?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "is_active" | "create_date", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string
      is_active: boolean | null
      create_date: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
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
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly user_id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly is_active: FieldRef<"user", 'Boolean'>
    readonly create_date: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Model zone
   */

  export type AggregateZone = {
    _count: ZoneCountAggregateOutputType | null
    _avg: ZoneAvgAggregateOutputType | null
    _sum: ZoneSumAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  export type ZoneAvgAggregateOutputType = {
    zone_id: number | null
  }

  export type ZoneSumAggregateOutputType = {
    zone_id: number | null
  }

  export type ZoneMinAggregateOutputType = {
    zone_id: number | null
    name: string | null
    create_date: Date | null
    is_zone_real: boolean | null
  }

  export type ZoneMaxAggregateOutputType = {
    zone_id: number | null
    name: string | null
    create_date: Date | null
    is_zone_real: boolean | null
  }

  export type ZoneCountAggregateOutputType = {
    zone_id: number
    name: number
    create_date: number
    is_zone_real: number
    _all: number
  }


  export type ZoneAvgAggregateInputType = {
    zone_id?: true
  }

  export type ZoneSumAggregateInputType = {
    zone_id?: true
  }

  export type ZoneMinAggregateInputType = {
    zone_id?: true
    name?: true
    create_date?: true
    is_zone_real?: true
  }

  export type ZoneMaxAggregateInputType = {
    zone_id?: true
    name?: true
    create_date?: true
    is_zone_real?: true
  }

  export type ZoneCountAggregateInputType = {
    zone_id?: true
    name?: true
    create_date?: true
    is_zone_real?: true
    _all?: true
  }

  export type ZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zone to aggregate.
     */
    where?: zoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zones to fetch.
     */
    orderBy?: zoneOrderByWithRelationInput | zoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: zoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned zones
    **/
    _count?: true | ZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZoneMaxAggregateInputType
  }

  export type GetZoneAggregateType<T extends ZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZone[P]>
      : GetScalarType<T[P], AggregateZone[P]>
  }




  export type zoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zoneWhereInput
    orderBy?: zoneOrderByWithAggregationInput | zoneOrderByWithAggregationInput[]
    by: ZoneScalarFieldEnum[] | ZoneScalarFieldEnum
    having?: zoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZoneCountAggregateInputType | true
    _avg?: ZoneAvgAggregateInputType
    _sum?: ZoneSumAggregateInputType
    _min?: ZoneMinAggregateInputType
    _max?: ZoneMaxAggregateInputType
  }

  export type ZoneGroupByOutputType = {
    zone_id: number
    name: string
    create_date: Date
    is_zone_real: boolean
    _count: ZoneCountAggregateOutputType | null
    _avg: ZoneAvgAggregateOutputType | null
    _sum: ZoneSumAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  type GetZoneGroupByPayload<T extends zoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZoneGroupByOutputType[P]>
            : GetScalarType<T[P], ZoneGroupByOutputType[P]>
        }
      >
    >


  export type zoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    zone_id?: boolean
    name?: boolean
    create_date?: boolean
    is_zone_real?: boolean
    area?: boolean | zone$areaArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zone"]>

  export type zoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    zone_id?: boolean
    name?: boolean
    create_date?: boolean
    is_zone_real?: boolean
  }, ExtArgs["result"]["zone"]>

  export type zoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    zone_id?: boolean
    name?: boolean
    create_date?: boolean
    is_zone_real?: boolean
  }, ExtArgs["result"]["zone"]>

  export type zoneSelectScalar = {
    zone_id?: boolean
    name?: boolean
    create_date?: boolean
    is_zone_real?: boolean
  }

  export type zoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"zone_id" | "name" | "create_date" | "is_zone_real", ExtArgs["result"]["zone"]>
  export type zoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | zone$areaArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type zoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type zoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $zonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "zone"
    objects: {
      area: Prisma.$areaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      zone_id: number
      name: string
      create_date: Date
      is_zone_real: boolean
    }, ExtArgs["result"]["zone"]>
    composites: {}
  }

  type zoneGetPayload<S extends boolean | null | undefined | zoneDefaultArgs> = $Result.GetResult<Prisma.$zonePayload, S>

  type zoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<zoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZoneCountAggregateInputType | true
    }

  export interface zoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['zone'], meta: { name: 'zone' } }
    /**
     * Find zero or one Zone that matches the filter.
     * @param {zoneFindUniqueArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends zoneFindUniqueArgs>(args: SelectSubset<T, zoneFindUniqueArgs<ExtArgs>>): Prisma__zoneClient<$Result.GetResult<Prisma.$zonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {zoneFindUniqueOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends zoneFindUniqueOrThrowArgs>(args: SelectSubset<T, zoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__zoneClient<$Result.GetResult<Prisma.$zonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoneFindFirstArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends zoneFindFirstArgs>(args?: SelectSubset<T, zoneFindFirstArgs<ExtArgs>>): Prisma__zoneClient<$Result.GetResult<Prisma.$zonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoneFindFirstOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends zoneFindFirstOrThrowArgs>(args?: SelectSubset<T, zoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__zoneClient<$Result.GetResult<Prisma.$zonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zones
     * const zones = await prisma.zone.findMany()
     * 
     * // Get first 10 Zones
     * const zones = await prisma.zone.findMany({ take: 10 })
     * 
     * // Only select the `zone_id`
     * const zoneWithZone_idOnly = await prisma.zone.findMany({ select: { zone_id: true } })
     * 
     */
    findMany<T extends zoneFindManyArgs>(args?: SelectSubset<T, zoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zone.
     * @param {zoneCreateArgs} args - Arguments to create a Zone.
     * @example
     * // Create one Zone
     * const Zone = await prisma.zone.create({
     *   data: {
     *     // ... data to create a Zone
     *   }
     * })
     * 
     */
    create<T extends zoneCreateArgs>(args: SelectSubset<T, zoneCreateArgs<ExtArgs>>): Prisma__zoneClient<$Result.GetResult<Prisma.$zonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zones.
     * @param {zoneCreateManyArgs} args - Arguments to create many Zones.
     * @example
     * // Create many Zones
     * const zone = await prisma.zone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends zoneCreateManyArgs>(args?: SelectSubset<T, zoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zones and returns the data saved in the database.
     * @param {zoneCreateManyAndReturnArgs} args - Arguments to create many Zones.
     * @example
     * // Create many Zones
     * const zone = await prisma.zone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zones and only return the `zone_id`
     * const zoneWithZone_idOnly = await prisma.zone.createManyAndReturn({
     *   select: { zone_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends zoneCreateManyAndReturnArgs>(args?: SelectSubset<T, zoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zone.
     * @param {zoneDeleteArgs} args - Arguments to delete one Zone.
     * @example
     * // Delete one Zone
     * const Zone = await prisma.zone.delete({
     *   where: {
     *     // ... filter to delete one Zone
     *   }
     * })
     * 
     */
    delete<T extends zoneDeleteArgs>(args: SelectSubset<T, zoneDeleteArgs<ExtArgs>>): Prisma__zoneClient<$Result.GetResult<Prisma.$zonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zone.
     * @param {zoneUpdateArgs} args - Arguments to update one Zone.
     * @example
     * // Update one Zone
     * const zone = await prisma.zone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends zoneUpdateArgs>(args: SelectSubset<T, zoneUpdateArgs<ExtArgs>>): Prisma__zoneClient<$Result.GetResult<Prisma.$zonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zones.
     * @param {zoneDeleteManyArgs} args - Arguments to filter Zones to delete.
     * @example
     * // Delete a few Zones
     * const { count } = await prisma.zone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends zoneDeleteManyArgs>(args?: SelectSubset<T, zoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zones
     * const zone = await prisma.zone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends zoneUpdateManyArgs>(args: SelectSubset<T, zoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zones and returns the data updated in the database.
     * @param {zoneUpdateManyAndReturnArgs} args - Arguments to update many Zones.
     * @example
     * // Update many Zones
     * const zone = await prisma.zone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zones and only return the `zone_id`
     * const zoneWithZone_idOnly = await prisma.zone.updateManyAndReturn({
     *   select: { zone_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends zoneUpdateManyAndReturnArgs>(args: SelectSubset<T, zoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zone.
     * @param {zoneUpsertArgs} args - Arguments to update or create a Zone.
     * @example
     * // Update or create a Zone
     * const zone = await prisma.zone.upsert({
     *   create: {
     *     // ... data to create a Zone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zone we want to update
     *   }
     * })
     */
    upsert<T extends zoneUpsertArgs>(args: SelectSubset<T, zoneUpsertArgs<ExtArgs>>): Prisma__zoneClient<$Result.GetResult<Prisma.$zonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoneCountArgs} args - Arguments to filter Zones to count.
     * @example
     * // Count the number of Zones
     * const count = await prisma.zone.count({
     *   where: {
     *     // ... the filter for the Zones we want to count
     *   }
     * })
    **/
    count<T extends zoneCountArgs>(
      args?: Subset<T, zoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZoneAggregateArgs>(args: Subset<T, ZoneAggregateArgs>): Prisma.PrismaPromise<GetZoneAggregateType<T>>

    /**
     * Group by Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zoneGroupByArgs} args - Group by arguments.
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
      T extends zoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: zoneGroupByArgs['orderBy'] }
        : { orderBy?: zoneGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, zoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the zone model
   */
  readonly fields: zoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for zone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__zoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends zone$areaArgs<ExtArgs> = {}>(args?: Subset<T, zone$areaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$areaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the zone model
   */
  interface zoneFieldRefs {
    readonly zone_id: FieldRef<"zone", 'Int'>
    readonly name: FieldRef<"zone", 'String'>
    readonly create_date: FieldRef<"zone", 'DateTime'>
    readonly is_zone_real: FieldRef<"zone", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * zone findUnique
   */
  export type zoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zone
     */
    select?: zoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zone
     */
    omit?: zoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zoneInclude<ExtArgs> | null
    /**
     * Filter, which zone to fetch.
     */
    where: zoneWhereUniqueInput
  }

  /**
   * zone findUniqueOrThrow
   */
  export type zoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zone
     */
    select?: zoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zone
     */
    omit?: zoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zoneInclude<ExtArgs> | null
    /**
     * Filter, which zone to fetch.
     */
    where: zoneWhereUniqueInput
  }

  /**
   * zone findFirst
   */
  export type zoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zone
     */
    select?: zoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zone
     */
    omit?: zoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zoneInclude<ExtArgs> | null
    /**
     * Filter, which zone to fetch.
     */
    where?: zoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zones to fetch.
     */
    orderBy?: zoneOrderByWithRelationInput | zoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zones.
     */
    cursor?: zoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * zone findFirstOrThrow
   */
  export type zoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zone
     */
    select?: zoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zone
     */
    omit?: zoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zoneInclude<ExtArgs> | null
    /**
     * Filter, which zone to fetch.
     */
    where?: zoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zones to fetch.
     */
    orderBy?: zoneOrderByWithRelationInput | zoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zones.
     */
    cursor?: zoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * zone findMany
   */
  export type zoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zone
     */
    select?: zoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zone
     */
    omit?: zoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zoneInclude<ExtArgs> | null
    /**
     * Filter, which zones to fetch.
     */
    where?: zoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zones to fetch.
     */
    orderBy?: zoneOrderByWithRelationInput | zoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing zones.
     */
    cursor?: zoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zones.
     */
    skip?: number
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * zone create
   */
  export type zoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zone
     */
    select?: zoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zone
     */
    omit?: zoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zoneInclude<ExtArgs> | null
    /**
     * The data needed to create a zone.
     */
    data: XOR<zoneCreateInput, zoneUncheckedCreateInput>
  }

  /**
   * zone createMany
   */
  export type zoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many zones.
     */
    data: zoneCreateManyInput | zoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zone createManyAndReturn
   */
  export type zoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zone
     */
    select?: zoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the zone
     */
    omit?: zoneOmit<ExtArgs> | null
    /**
     * The data used to create many zones.
     */
    data: zoneCreateManyInput | zoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zone update
   */
  export type zoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zone
     */
    select?: zoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zone
     */
    omit?: zoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zoneInclude<ExtArgs> | null
    /**
     * The data needed to update a zone.
     */
    data: XOR<zoneUpdateInput, zoneUncheckedUpdateInput>
    /**
     * Choose, which zone to update.
     */
    where: zoneWhereUniqueInput
  }

  /**
   * zone updateMany
   */
  export type zoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update zones.
     */
    data: XOR<zoneUpdateManyMutationInput, zoneUncheckedUpdateManyInput>
    /**
     * Filter which zones to update
     */
    where?: zoneWhereInput
    /**
     * Limit how many zones to update.
     */
    limit?: number
  }

  /**
   * zone updateManyAndReturn
   */
  export type zoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zone
     */
    select?: zoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the zone
     */
    omit?: zoneOmit<ExtArgs> | null
    /**
     * The data used to update zones.
     */
    data: XOR<zoneUpdateManyMutationInput, zoneUncheckedUpdateManyInput>
    /**
     * Filter which zones to update
     */
    where?: zoneWhereInput
    /**
     * Limit how many zones to update.
     */
    limit?: number
  }

  /**
   * zone upsert
   */
  export type zoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zone
     */
    select?: zoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zone
     */
    omit?: zoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zoneInclude<ExtArgs> | null
    /**
     * The filter to search for the zone to update in case it exists.
     */
    where: zoneWhereUniqueInput
    /**
     * In case the zone found by the `where` argument doesn't exist, create a new zone with this data.
     */
    create: XOR<zoneCreateInput, zoneUncheckedCreateInput>
    /**
     * In case the zone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<zoneUpdateInput, zoneUncheckedUpdateInput>
  }

  /**
   * zone delete
   */
  export type zoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zone
     */
    select?: zoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zone
     */
    omit?: zoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zoneInclude<ExtArgs> | null
    /**
     * Filter which zone to delete.
     */
    where: zoneWhereUniqueInput
  }

  /**
   * zone deleteMany
   */
  export type zoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zones to delete
     */
    where?: zoneWhereInput
    /**
     * Limit how many zones to delete.
     */
    limit?: number
  }

  /**
   * zone.area
   */
  export type zone$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the area
     */
    select?: areaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the area
     */
    omit?: areaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: areaInclude<ExtArgs> | null
    where?: areaWhereInput
    orderBy?: areaOrderByWithRelationInput | areaOrderByWithRelationInput[]
    cursor?: areaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * zone without action
   */
  export type zoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zone
     */
    select?: zoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zone
     */
    omit?: zoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zoneInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AreaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    zone_id: 'zone_id',
    is_active: 'is_active',
    stake_id: 'stake_id'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const ReferenceScalarFieldEnum: {
    id: 'id',
    sent_date: 'sent_date',
    name: 'name',
    area_id: 'area_id',
    other: 'other',
    who_sent: 'who_sent',
    offer: 'offer',
    phone: 'phone'
  };

  export type ReferenceScalarFieldEnum = (typeof ReferenceScalarFieldEnum)[keyof typeof ReferenceScalarFieldEnum]


  export const StakeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type StakeScalarFieldEnum = (typeof StakeScalarFieldEnum)[keyof typeof StakeScalarFieldEnum]


  export const Stop_teaching_reasonScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Stop_teaching_reasonScalarFieldEnum = (typeof Stop_teaching_reasonScalarFieldEnum)[keyof typeof Stop_teaching_reasonScalarFieldEnum]


  export const Uba_areaScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Uba_areaScalarFieldEnum = (typeof Uba_areaScalarFieldEnum)[keyof typeof Uba_areaScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    is_active: 'is_active',
    create_date: 'create_date'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ZoneScalarFieldEnum: {
    zone_id: 'zone_id',
    name: 'name',
    create_date: 'create_date',
    is_zone_real: 'is_zone_real'
  };

  export type ZoneScalarFieldEnum = (typeof ZoneScalarFieldEnum)[keyof typeof ZoneScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type areaWhereInput = {
    AND?: areaWhereInput | areaWhereInput[]
    OR?: areaWhereInput[]
    NOT?: areaWhereInput | areaWhereInput[]
    id?: IntFilter<"area"> | number
    name?: StringFilter<"area"> | string
    zone_id?: IntFilter<"area"> | number
    is_active?: BoolFilter<"area"> | boolean
    stake_id?: IntNullableFilter<"area"> | number | null
    zone?: XOR<ZoneScalarRelationFilter, zoneWhereInput>
    reference?: ReferenceListRelationFilter
  }

  export type areaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    zone_id?: SortOrder
    is_active?: SortOrder
    stake_id?: SortOrderInput | SortOrder
    zone?: zoneOrderByWithRelationInput
    reference?: referenceOrderByRelationAggregateInput
  }

  export type areaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: areaWhereInput | areaWhereInput[]
    OR?: areaWhereInput[]
    NOT?: areaWhereInput | areaWhereInput[]
    name?: StringFilter<"area"> | string
    zone_id?: IntFilter<"area"> | number
    is_active?: BoolFilter<"area"> | boolean
    stake_id?: IntNullableFilter<"area"> | number | null
    zone?: XOR<ZoneScalarRelationFilter, zoneWhereInput>
    reference?: ReferenceListRelationFilter
  }, "id">

  export type areaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    zone_id?: SortOrder
    is_active?: SortOrder
    stake_id?: SortOrderInput | SortOrder
    _count?: areaCountOrderByAggregateInput
    _avg?: areaAvgOrderByAggregateInput
    _max?: areaMaxOrderByAggregateInput
    _min?: areaMinOrderByAggregateInput
    _sum?: areaSumOrderByAggregateInput
  }

  export type areaScalarWhereWithAggregatesInput = {
    AND?: areaScalarWhereWithAggregatesInput | areaScalarWhereWithAggregatesInput[]
    OR?: areaScalarWhereWithAggregatesInput[]
    NOT?: areaScalarWhereWithAggregatesInput | areaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"area"> | number
    name?: StringWithAggregatesFilter<"area"> | string
    zone_id?: IntWithAggregatesFilter<"area"> | number
    is_active?: BoolWithAggregatesFilter<"area"> | boolean
    stake_id?: IntNullableWithAggregatesFilter<"area"> | number | null
  }

  export type offerWhereInput = {
    AND?: offerWhereInput | offerWhereInput[]
    OR?: offerWhereInput[]
    NOT?: offerWhereInput | offerWhereInput[]
    id?: IntFilter<"offer"> | number
    name?: StringFilter<"offer"> | string
  }

  export type offerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type offerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: offerWhereInput | offerWhereInput[]
    OR?: offerWhereInput[]
    NOT?: offerWhereInput | offerWhereInput[]
  }, "id" | "name">

  export type offerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: offerCountOrderByAggregateInput
    _avg?: offerAvgOrderByAggregateInput
    _max?: offerMaxOrderByAggregateInput
    _min?: offerMinOrderByAggregateInput
    _sum?: offerSumOrderByAggregateInput
  }

  export type offerScalarWhereWithAggregatesInput = {
    AND?: offerScalarWhereWithAggregatesInput | offerScalarWhereWithAggregatesInput[]
    OR?: offerScalarWhereWithAggregatesInput[]
    NOT?: offerScalarWhereWithAggregatesInput | offerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"offer"> | number
    name?: StringWithAggregatesFilter<"offer"> | string
  }

  export type referenceWhereInput = {
    AND?: referenceWhereInput | referenceWhereInput[]
    OR?: referenceWhereInput[]
    NOT?: referenceWhereInput | referenceWhereInput[]
    id?: StringFilter<"reference"> | string
    sent_date?: DateTimeFilter<"reference"> | Date | string
    name?: StringFilter<"reference"> | string
    area_id?: IntFilter<"reference"> | number
    other?: StringNullableFilter<"reference"> | string | null
    who_sent?: StringFilter<"reference"> | string
    offer?: StringNullableFilter<"reference"> | string | null
    phone?: StringNullableFilter<"reference"> | string | null
    area?: XOR<AreaScalarRelationFilter, areaWhereInput>
  }

  export type referenceOrderByWithRelationInput = {
    id?: SortOrder
    sent_date?: SortOrder
    name?: SortOrder
    area_id?: SortOrder
    other?: SortOrderInput | SortOrder
    who_sent?: SortOrder
    offer?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    area?: areaOrderByWithRelationInput
  }

  export type referenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: referenceWhereInput | referenceWhereInput[]
    OR?: referenceWhereInput[]
    NOT?: referenceWhereInput | referenceWhereInput[]
    sent_date?: DateTimeFilter<"reference"> | Date | string
    name?: StringFilter<"reference"> | string
    area_id?: IntFilter<"reference"> | number
    other?: StringNullableFilter<"reference"> | string | null
    who_sent?: StringFilter<"reference"> | string
    offer?: StringNullableFilter<"reference"> | string | null
    phone?: StringNullableFilter<"reference"> | string | null
    area?: XOR<AreaScalarRelationFilter, areaWhereInput>
  }, "id">

  export type referenceOrderByWithAggregationInput = {
    id?: SortOrder
    sent_date?: SortOrder
    name?: SortOrder
    area_id?: SortOrder
    other?: SortOrderInput | SortOrder
    who_sent?: SortOrder
    offer?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: referenceCountOrderByAggregateInput
    _avg?: referenceAvgOrderByAggregateInput
    _max?: referenceMaxOrderByAggregateInput
    _min?: referenceMinOrderByAggregateInput
    _sum?: referenceSumOrderByAggregateInput
  }

  export type referenceScalarWhereWithAggregatesInput = {
    AND?: referenceScalarWhereWithAggregatesInput | referenceScalarWhereWithAggregatesInput[]
    OR?: referenceScalarWhereWithAggregatesInput[]
    NOT?: referenceScalarWhereWithAggregatesInput | referenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"reference"> | string
    sent_date?: DateTimeWithAggregatesFilter<"reference"> | Date | string
    name?: StringWithAggregatesFilter<"reference"> | string
    area_id?: IntWithAggregatesFilter<"reference"> | number
    other?: StringNullableWithAggregatesFilter<"reference"> | string | null
    who_sent?: StringWithAggregatesFilter<"reference"> | string
    offer?: StringNullableWithAggregatesFilter<"reference"> | string | null
    phone?: StringNullableWithAggregatesFilter<"reference"> | string | null
  }

  export type stakeWhereInput = {
    AND?: stakeWhereInput | stakeWhereInput[]
    OR?: stakeWhereInput[]
    NOT?: stakeWhereInput | stakeWhereInput[]
    id?: IntFilter<"stake"> | number
    name?: StringFilter<"stake"> | string
  }

  export type stakeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stakeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: stakeWhereInput | stakeWhereInput[]
    OR?: stakeWhereInput[]
    NOT?: stakeWhereInput | stakeWhereInput[]
  }, "id" | "name">

  export type stakeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: stakeCountOrderByAggregateInput
    _avg?: stakeAvgOrderByAggregateInput
    _max?: stakeMaxOrderByAggregateInput
    _min?: stakeMinOrderByAggregateInput
    _sum?: stakeSumOrderByAggregateInput
  }

  export type stakeScalarWhereWithAggregatesInput = {
    AND?: stakeScalarWhereWithAggregatesInput | stakeScalarWhereWithAggregatesInput[]
    OR?: stakeScalarWhereWithAggregatesInput[]
    NOT?: stakeScalarWhereWithAggregatesInput | stakeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stake"> | number
    name?: StringWithAggregatesFilter<"stake"> | string
  }

  export type stop_teaching_reasonWhereInput = {
    AND?: stop_teaching_reasonWhereInput | stop_teaching_reasonWhereInput[]
    OR?: stop_teaching_reasonWhereInput[]
    NOT?: stop_teaching_reasonWhereInput | stop_teaching_reasonWhereInput[]
    id?: IntFilter<"stop_teaching_reason"> | number
    name?: StringFilter<"stop_teaching_reason"> | string
  }

  export type stop_teaching_reasonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stop_teaching_reasonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: stop_teaching_reasonWhereInput | stop_teaching_reasonWhereInput[]
    OR?: stop_teaching_reasonWhereInput[]
    NOT?: stop_teaching_reasonWhereInput | stop_teaching_reasonWhereInput[]
  }, "id" | "name">

  export type stop_teaching_reasonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: stop_teaching_reasonCountOrderByAggregateInput
    _avg?: stop_teaching_reasonAvgOrderByAggregateInput
    _max?: stop_teaching_reasonMaxOrderByAggregateInput
    _min?: stop_teaching_reasonMinOrderByAggregateInput
    _sum?: stop_teaching_reasonSumOrderByAggregateInput
  }

  export type stop_teaching_reasonScalarWhereWithAggregatesInput = {
    AND?: stop_teaching_reasonScalarWhereWithAggregatesInput | stop_teaching_reasonScalarWhereWithAggregatesInput[]
    OR?: stop_teaching_reasonScalarWhereWithAggregatesInput[]
    NOT?: stop_teaching_reasonScalarWhereWithAggregatesInput | stop_teaching_reasonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stop_teaching_reason"> | number
    name?: StringWithAggregatesFilter<"stop_teaching_reason"> | string
  }

  export type uba_areaWhereInput = {
    AND?: uba_areaWhereInput | uba_areaWhereInput[]
    OR?: uba_areaWhereInput[]
    NOT?: uba_areaWhereInput | uba_areaWhereInput[]
    id?: IntFilter<"uba_area"> | number
    name?: StringFilter<"uba_area"> | string
  }

  export type uba_areaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type uba_areaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: uba_areaWhereInput | uba_areaWhereInput[]
    OR?: uba_areaWhereInput[]
    NOT?: uba_areaWhereInput | uba_areaWhereInput[]
  }, "id" | "name">

  export type uba_areaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: uba_areaCountOrderByAggregateInput
    _avg?: uba_areaAvgOrderByAggregateInput
    _max?: uba_areaMaxOrderByAggregateInput
    _min?: uba_areaMinOrderByAggregateInput
    _sum?: uba_areaSumOrderByAggregateInput
  }

  export type uba_areaScalarWhereWithAggregatesInput = {
    AND?: uba_areaScalarWhereWithAggregatesInput | uba_areaScalarWhereWithAggregatesInput[]
    OR?: uba_areaScalarWhereWithAggregatesInput[]
    NOT?: uba_areaScalarWhereWithAggregatesInput | uba_areaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"uba_area"> | number
    name?: StringWithAggregatesFilter<"uba_area"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    user_id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    is_active?: BoolNullableFilter<"user"> | boolean | null
    create_date?: DateTimeFilter<"user"> | Date | string
  }

  export type userOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrderInput | SortOrder
    create_date?: SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    name?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    is_active?: BoolNullableFilter<"user"> | boolean | null
    create_date?: DateTimeFilter<"user"> | Date | string
  }, "user_id" | "name">

  export type userOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrderInput | SortOrder
    create_date?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    is_active?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    create_date?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type zoneWhereInput = {
    AND?: zoneWhereInput | zoneWhereInput[]
    OR?: zoneWhereInput[]
    NOT?: zoneWhereInput | zoneWhereInput[]
    zone_id?: IntFilter<"zone"> | number
    name?: StringFilter<"zone"> | string
    create_date?: DateTimeFilter<"zone"> | Date | string
    is_zone_real?: BoolFilter<"zone"> | boolean
    area?: AreaListRelationFilter
  }

  export type zoneOrderByWithRelationInput = {
    zone_id?: SortOrder
    name?: SortOrder
    create_date?: SortOrder
    is_zone_real?: SortOrder
    area?: areaOrderByRelationAggregateInput
  }

  export type zoneWhereUniqueInput = Prisma.AtLeast<{
    zone_id?: number
    AND?: zoneWhereInput | zoneWhereInput[]
    OR?: zoneWhereInput[]
    NOT?: zoneWhereInput | zoneWhereInput[]
    name?: StringFilter<"zone"> | string
    create_date?: DateTimeFilter<"zone"> | Date | string
    is_zone_real?: BoolFilter<"zone"> | boolean
    area?: AreaListRelationFilter
  }, "zone_id">

  export type zoneOrderByWithAggregationInput = {
    zone_id?: SortOrder
    name?: SortOrder
    create_date?: SortOrder
    is_zone_real?: SortOrder
    _count?: zoneCountOrderByAggregateInput
    _avg?: zoneAvgOrderByAggregateInput
    _max?: zoneMaxOrderByAggregateInput
    _min?: zoneMinOrderByAggregateInput
    _sum?: zoneSumOrderByAggregateInput
  }

  export type zoneScalarWhereWithAggregatesInput = {
    AND?: zoneScalarWhereWithAggregatesInput | zoneScalarWhereWithAggregatesInput[]
    OR?: zoneScalarWhereWithAggregatesInput[]
    NOT?: zoneScalarWhereWithAggregatesInput | zoneScalarWhereWithAggregatesInput[]
    zone_id?: IntWithAggregatesFilter<"zone"> | number
    name?: StringWithAggregatesFilter<"zone"> | string
    create_date?: DateTimeWithAggregatesFilter<"zone"> | Date | string
    is_zone_real?: BoolWithAggregatesFilter<"zone"> | boolean
  }

  export type areaCreateInput = {
    id: number
    name: string
    is_active?: boolean
    stake_id?: number | null
    zone: zoneCreateNestedOneWithoutAreaInput
    reference?: referenceCreateNestedManyWithoutAreaInput
  }

  export type areaUncheckedCreateInput = {
    id: number
    name: string
    zone_id: number
    is_active?: boolean
    stake_id?: number | null
    reference?: referenceUncheckedCreateNestedManyWithoutAreaInput
  }

  export type areaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    stake_id?: NullableIntFieldUpdateOperationsInput | number | null
    zone?: zoneUpdateOneRequiredWithoutAreaNestedInput
    reference?: referenceUpdateManyWithoutAreaNestedInput
  }

  export type areaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    zone_id?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    stake_id?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: referenceUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type areaCreateManyInput = {
    id: number
    name: string
    zone_id: number
    is_active?: boolean
    stake_id?: number | null
  }

  export type areaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    stake_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type areaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    zone_id?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    stake_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type offerCreateInput = {
    name: string
  }

  export type offerUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type offerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type offerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type offerCreateManyInput = {
    id?: number
    name: string
  }

  export type offerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type offerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type referenceCreateInput = {
    id: string
    sent_date?: Date | string
    name: string
    other?: string | null
    who_sent: string
    offer?: string | null
    phone?: string | null
    area: areaCreateNestedOneWithoutReferenceInput
  }

  export type referenceUncheckedCreateInput = {
    id: string
    sent_date?: Date | string
    name: string
    area_id: number
    other?: string | null
    who_sent: string
    offer?: string | null
    phone?: string | null
  }

  export type referenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    other?: NullableStringFieldUpdateOperationsInput | string | null
    who_sent?: StringFieldUpdateOperationsInput | string
    offer?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    area?: areaUpdateOneRequiredWithoutReferenceNestedInput
  }

  export type referenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    area_id?: IntFieldUpdateOperationsInput | number
    other?: NullableStringFieldUpdateOperationsInput | string | null
    who_sent?: StringFieldUpdateOperationsInput | string
    offer?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type referenceCreateManyInput = {
    id: string
    sent_date?: Date | string
    name: string
    area_id: number
    other?: string | null
    who_sent: string
    offer?: string | null
    phone?: string | null
  }

  export type referenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    other?: NullableStringFieldUpdateOperationsInput | string | null
    who_sent?: StringFieldUpdateOperationsInput | string
    offer?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type referenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    area_id?: IntFieldUpdateOperationsInput | number
    other?: NullableStringFieldUpdateOperationsInput | string | null
    who_sent?: StringFieldUpdateOperationsInput | string
    offer?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stakeCreateInput = {
    name: string
  }

  export type stakeUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type stakeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type stakeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type stakeCreateManyInput = {
    id?: number
    name: string
  }

  export type stakeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type stakeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type stop_teaching_reasonCreateInput = {
    name: string
  }

  export type stop_teaching_reasonUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type stop_teaching_reasonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type stop_teaching_reasonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type stop_teaching_reasonCreateManyInput = {
    id?: number
    name: string
  }

  export type stop_teaching_reasonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type stop_teaching_reasonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type uba_areaCreateInput = {
    name: string
  }

  export type uba_areaUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type uba_areaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type uba_areaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type uba_areaCreateManyInput = {
    id?: number
    name: string
  }

  export type uba_areaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type uba_areaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    name: string
    is_active?: boolean | null
    create_date?: Date | string
  }

  export type userUncheckedCreateInput = {
    user_id?: number
    name: string
    is_active?: boolean | null
    create_date?: Date | string
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateManyInput = {
    user_id?: number
    name: string
    is_active?: boolean | null
    create_date?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type zoneCreateInput = {
    name: string
    create_date?: Date | string
    is_zone_real?: boolean
    area?: areaCreateNestedManyWithoutZoneInput
  }

  export type zoneUncheckedCreateInput = {
    zone_id?: number
    name: string
    create_date?: Date | string
    is_zone_real?: boolean
    area?: areaUncheckedCreateNestedManyWithoutZoneInput
  }

  export type zoneUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_zone_real?: BoolFieldUpdateOperationsInput | boolean
    area?: areaUpdateManyWithoutZoneNestedInput
  }

  export type zoneUncheckedUpdateInput = {
    zone_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_zone_real?: BoolFieldUpdateOperationsInput | boolean
    area?: areaUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type zoneCreateManyInput = {
    zone_id?: number
    name: string
    create_date?: Date | string
    is_zone_real?: boolean
  }

  export type zoneUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_zone_real?: BoolFieldUpdateOperationsInput | boolean
  }

  export type zoneUncheckedUpdateManyInput = {
    zone_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_zone_real?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ZoneScalarRelationFilter = {
    is?: zoneWhereInput
    isNot?: zoneWhereInput
  }

  export type ReferenceListRelationFilter = {
    every?: referenceWhereInput
    some?: referenceWhereInput
    none?: referenceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type referenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type areaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    zone_id?: SortOrder
    is_active?: SortOrder
    stake_id?: SortOrder
  }

  export type areaAvgOrderByAggregateInput = {
    id?: SortOrder
    zone_id?: SortOrder
    stake_id?: SortOrder
  }

  export type areaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    zone_id?: SortOrder
    is_active?: SortOrder
    stake_id?: SortOrder
  }

  export type areaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    zone_id?: SortOrder
    is_active?: SortOrder
    stake_id?: SortOrder
  }

  export type areaSumOrderByAggregateInput = {
    id?: SortOrder
    zone_id?: SortOrder
    stake_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type offerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type offerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type offerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type offerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type offerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AreaScalarRelationFilter = {
    is?: areaWhereInput
    isNot?: areaWhereInput
  }

  export type referenceCountOrderByAggregateInput = {
    id?: SortOrder
    sent_date?: SortOrder
    name?: SortOrder
    area_id?: SortOrder
    other?: SortOrder
    who_sent?: SortOrder
    offer?: SortOrder
    phone?: SortOrder
  }

  export type referenceAvgOrderByAggregateInput = {
    area_id?: SortOrder
  }

  export type referenceMaxOrderByAggregateInput = {
    id?: SortOrder
    sent_date?: SortOrder
    name?: SortOrder
    area_id?: SortOrder
    other?: SortOrder
    who_sent?: SortOrder
    offer?: SortOrder
    phone?: SortOrder
  }

  export type referenceMinOrderByAggregateInput = {
    id?: SortOrder
    sent_date?: SortOrder
    name?: SortOrder
    area_id?: SortOrder
    other?: SortOrder
    who_sent?: SortOrder
    offer?: SortOrder
    phone?: SortOrder
  }

  export type referenceSumOrderByAggregateInput = {
    area_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type stakeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stakeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stakeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stakeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stakeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stop_teaching_reasonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stop_teaching_reasonAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stop_teaching_reasonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stop_teaching_reasonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stop_teaching_reasonSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type uba_areaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type uba_areaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type uba_areaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type uba_areaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type uba_areaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type userCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    create_date?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    create_date?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    create_date?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type AreaListRelationFilter = {
    every?: areaWhereInput
    some?: areaWhereInput
    none?: areaWhereInput
  }

  export type areaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type zoneCountOrderByAggregateInput = {
    zone_id?: SortOrder
    name?: SortOrder
    create_date?: SortOrder
    is_zone_real?: SortOrder
  }

  export type zoneAvgOrderByAggregateInput = {
    zone_id?: SortOrder
  }

  export type zoneMaxOrderByAggregateInput = {
    zone_id?: SortOrder
    name?: SortOrder
    create_date?: SortOrder
    is_zone_real?: SortOrder
  }

  export type zoneMinOrderByAggregateInput = {
    zone_id?: SortOrder
    name?: SortOrder
    create_date?: SortOrder
    is_zone_real?: SortOrder
  }

  export type zoneSumOrderByAggregateInput = {
    zone_id?: SortOrder
  }

  export type zoneCreateNestedOneWithoutAreaInput = {
    create?: XOR<zoneCreateWithoutAreaInput, zoneUncheckedCreateWithoutAreaInput>
    connectOrCreate?: zoneCreateOrConnectWithoutAreaInput
    connect?: zoneWhereUniqueInput
  }

  export type referenceCreateNestedManyWithoutAreaInput = {
    create?: XOR<referenceCreateWithoutAreaInput, referenceUncheckedCreateWithoutAreaInput> | referenceCreateWithoutAreaInput[] | referenceUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: referenceCreateOrConnectWithoutAreaInput | referenceCreateOrConnectWithoutAreaInput[]
    createMany?: referenceCreateManyAreaInputEnvelope
    connect?: referenceWhereUniqueInput | referenceWhereUniqueInput[]
  }

  export type referenceUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<referenceCreateWithoutAreaInput, referenceUncheckedCreateWithoutAreaInput> | referenceCreateWithoutAreaInput[] | referenceUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: referenceCreateOrConnectWithoutAreaInput | referenceCreateOrConnectWithoutAreaInput[]
    createMany?: referenceCreateManyAreaInputEnvelope
    connect?: referenceWhereUniqueInput | referenceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type zoneUpdateOneRequiredWithoutAreaNestedInput = {
    create?: XOR<zoneCreateWithoutAreaInput, zoneUncheckedCreateWithoutAreaInput>
    connectOrCreate?: zoneCreateOrConnectWithoutAreaInput
    upsert?: zoneUpsertWithoutAreaInput
    connect?: zoneWhereUniqueInput
    update?: XOR<XOR<zoneUpdateToOneWithWhereWithoutAreaInput, zoneUpdateWithoutAreaInput>, zoneUncheckedUpdateWithoutAreaInput>
  }

  export type referenceUpdateManyWithoutAreaNestedInput = {
    create?: XOR<referenceCreateWithoutAreaInput, referenceUncheckedCreateWithoutAreaInput> | referenceCreateWithoutAreaInput[] | referenceUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: referenceCreateOrConnectWithoutAreaInput | referenceCreateOrConnectWithoutAreaInput[]
    upsert?: referenceUpsertWithWhereUniqueWithoutAreaInput | referenceUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: referenceCreateManyAreaInputEnvelope
    set?: referenceWhereUniqueInput | referenceWhereUniqueInput[]
    disconnect?: referenceWhereUniqueInput | referenceWhereUniqueInput[]
    delete?: referenceWhereUniqueInput | referenceWhereUniqueInput[]
    connect?: referenceWhereUniqueInput | referenceWhereUniqueInput[]
    update?: referenceUpdateWithWhereUniqueWithoutAreaInput | referenceUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: referenceUpdateManyWithWhereWithoutAreaInput | referenceUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: referenceScalarWhereInput | referenceScalarWhereInput[]
  }

  export type referenceUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<referenceCreateWithoutAreaInput, referenceUncheckedCreateWithoutAreaInput> | referenceCreateWithoutAreaInput[] | referenceUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: referenceCreateOrConnectWithoutAreaInput | referenceCreateOrConnectWithoutAreaInput[]
    upsert?: referenceUpsertWithWhereUniqueWithoutAreaInput | referenceUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: referenceCreateManyAreaInputEnvelope
    set?: referenceWhereUniqueInput | referenceWhereUniqueInput[]
    disconnect?: referenceWhereUniqueInput | referenceWhereUniqueInput[]
    delete?: referenceWhereUniqueInput | referenceWhereUniqueInput[]
    connect?: referenceWhereUniqueInput | referenceWhereUniqueInput[]
    update?: referenceUpdateWithWhereUniqueWithoutAreaInput | referenceUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: referenceUpdateManyWithWhereWithoutAreaInput | referenceUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: referenceScalarWhereInput | referenceScalarWhereInput[]
  }

  export type areaCreateNestedOneWithoutReferenceInput = {
    create?: XOR<areaCreateWithoutReferenceInput, areaUncheckedCreateWithoutReferenceInput>
    connectOrCreate?: areaCreateOrConnectWithoutReferenceInput
    connect?: areaWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type areaUpdateOneRequiredWithoutReferenceNestedInput = {
    create?: XOR<areaCreateWithoutReferenceInput, areaUncheckedCreateWithoutReferenceInput>
    connectOrCreate?: areaCreateOrConnectWithoutReferenceInput
    upsert?: areaUpsertWithoutReferenceInput
    connect?: areaWhereUniqueInput
    update?: XOR<XOR<areaUpdateToOneWithWhereWithoutReferenceInput, areaUpdateWithoutReferenceInput>, areaUncheckedUpdateWithoutReferenceInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type areaCreateNestedManyWithoutZoneInput = {
    create?: XOR<areaCreateWithoutZoneInput, areaUncheckedCreateWithoutZoneInput> | areaCreateWithoutZoneInput[] | areaUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: areaCreateOrConnectWithoutZoneInput | areaCreateOrConnectWithoutZoneInput[]
    createMany?: areaCreateManyZoneInputEnvelope
    connect?: areaWhereUniqueInput | areaWhereUniqueInput[]
  }

  export type areaUncheckedCreateNestedManyWithoutZoneInput = {
    create?: XOR<areaCreateWithoutZoneInput, areaUncheckedCreateWithoutZoneInput> | areaCreateWithoutZoneInput[] | areaUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: areaCreateOrConnectWithoutZoneInput | areaCreateOrConnectWithoutZoneInput[]
    createMany?: areaCreateManyZoneInputEnvelope
    connect?: areaWhereUniqueInput | areaWhereUniqueInput[]
  }

  export type areaUpdateManyWithoutZoneNestedInput = {
    create?: XOR<areaCreateWithoutZoneInput, areaUncheckedCreateWithoutZoneInput> | areaCreateWithoutZoneInput[] | areaUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: areaCreateOrConnectWithoutZoneInput | areaCreateOrConnectWithoutZoneInput[]
    upsert?: areaUpsertWithWhereUniqueWithoutZoneInput | areaUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: areaCreateManyZoneInputEnvelope
    set?: areaWhereUniqueInput | areaWhereUniqueInput[]
    disconnect?: areaWhereUniqueInput | areaWhereUniqueInput[]
    delete?: areaWhereUniqueInput | areaWhereUniqueInput[]
    connect?: areaWhereUniqueInput | areaWhereUniqueInput[]
    update?: areaUpdateWithWhereUniqueWithoutZoneInput | areaUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: areaUpdateManyWithWhereWithoutZoneInput | areaUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: areaScalarWhereInput | areaScalarWhereInput[]
  }

  export type areaUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<areaCreateWithoutZoneInput, areaUncheckedCreateWithoutZoneInput> | areaCreateWithoutZoneInput[] | areaUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: areaCreateOrConnectWithoutZoneInput | areaCreateOrConnectWithoutZoneInput[]
    upsert?: areaUpsertWithWhereUniqueWithoutZoneInput | areaUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: areaCreateManyZoneInputEnvelope
    set?: areaWhereUniqueInput | areaWhereUniqueInput[]
    disconnect?: areaWhereUniqueInput | areaWhereUniqueInput[]
    delete?: areaWhereUniqueInput | areaWhereUniqueInput[]
    connect?: areaWhereUniqueInput | areaWhereUniqueInput[]
    update?: areaUpdateWithWhereUniqueWithoutZoneInput | areaUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: areaUpdateManyWithWhereWithoutZoneInput | areaUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: areaScalarWhereInput | areaScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type zoneCreateWithoutAreaInput = {
    name: string
    create_date?: Date | string
    is_zone_real?: boolean
  }

  export type zoneUncheckedCreateWithoutAreaInput = {
    zone_id?: number
    name: string
    create_date?: Date | string
    is_zone_real?: boolean
  }

  export type zoneCreateOrConnectWithoutAreaInput = {
    where: zoneWhereUniqueInput
    create: XOR<zoneCreateWithoutAreaInput, zoneUncheckedCreateWithoutAreaInput>
  }

  export type referenceCreateWithoutAreaInput = {
    id: string
    sent_date?: Date | string
    name: string
    other?: string | null
    who_sent: string
    offer?: string | null
    phone?: string | null
  }

  export type referenceUncheckedCreateWithoutAreaInput = {
    id: string
    sent_date?: Date | string
    name: string
    other?: string | null
    who_sent: string
    offer?: string | null
    phone?: string | null
  }

  export type referenceCreateOrConnectWithoutAreaInput = {
    where: referenceWhereUniqueInput
    create: XOR<referenceCreateWithoutAreaInput, referenceUncheckedCreateWithoutAreaInput>
  }

  export type referenceCreateManyAreaInputEnvelope = {
    data: referenceCreateManyAreaInput | referenceCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type zoneUpsertWithoutAreaInput = {
    update: XOR<zoneUpdateWithoutAreaInput, zoneUncheckedUpdateWithoutAreaInput>
    create: XOR<zoneCreateWithoutAreaInput, zoneUncheckedCreateWithoutAreaInput>
    where?: zoneWhereInput
  }

  export type zoneUpdateToOneWithWhereWithoutAreaInput = {
    where?: zoneWhereInput
    data: XOR<zoneUpdateWithoutAreaInput, zoneUncheckedUpdateWithoutAreaInput>
  }

  export type zoneUpdateWithoutAreaInput = {
    name?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_zone_real?: BoolFieldUpdateOperationsInput | boolean
  }

  export type zoneUncheckedUpdateWithoutAreaInput = {
    zone_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_zone_real?: BoolFieldUpdateOperationsInput | boolean
  }

  export type referenceUpsertWithWhereUniqueWithoutAreaInput = {
    where: referenceWhereUniqueInput
    update: XOR<referenceUpdateWithoutAreaInput, referenceUncheckedUpdateWithoutAreaInput>
    create: XOR<referenceCreateWithoutAreaInput, referenceUncheckedCreateWithoutAreaInput>
  }

  export type referenceUpdateWithWhereUniqueWithoutAreaInput = {
    where: referenceWhereUniqueInput
    data: XOR<referenceUpdateWithoutAreaInput, referenceUncheckedUpdateWithoutAreaInput>
  }

  export type referenceUpdateManyWithWhereWithoutAreaInput = {
    where: referenceScalarWhereInput
    data: XOR<referenceUpdateManyMutationInput, referenceUncheckedUpdateManyWithoutAreaInput>
  }

  export type referenceScalarWhereInput = {
    AND?: referenceScalarWhereInput | referenceScalarWhereInput[]
    OR?: referenceScalarWhereInput[]
    NOT?: referenceScalarWhereInput | referenceScalarWhereInput[]
    id?: StringFilter<"reference"> | string
    sent_date?: DateTimeFilter<"reference"> | Date | string
    name?: StringFilter<"reference"> | string
    area_id?: IntFilter<"reference"> | number
    other?: StringNullableFilter<"reference"> | string | null
    who_sent?: StringFilter<"reference"> | string
    offer?: StringNullableFilter<"reference"> | string | null
    phone?: StringNullableFilter<"reference"> | string | null
  }

  export type areaCreateWithoutReferenceInput = {
    id: number
    name: string
    is_active?: boolean
    stake_id?: number | null
    zone: zoneCreateNestedOneWithoutAreaInput
  }

  export type areaUncheckedCreateWithoutReferenceInput = {
    id: number
    name: string
    zone_id: number
    is_active?: boolean
    stake_id?: number | null
  }

  export type areaCreateOrConnectWithoutReferenceInput = {
    where: areaWhereUniqueInput
    create: XOR<areaCreateWithoutReferenceInput, areaUncheckedCreateWithoutReferenceInput>
  }

  export type areaUpsertWithoutReferenceInput = {
    update: XOR<areaUpdateWithoutReferenceInput, areaUncheckedUpdateWithoutReferenceInput>
    create: XOR<areaCreateWithoutReferenceInput, areaUncheckedCreateWithoutReferenceInput>
    where?: areaWhereInput
  }

  export type areaUpdateToOneWithWhereWithoutReferenceInput = {
    where?: areaWhereInput
    data: XOR<areaUpdateWithoutReferenceInput, areaUncheckedUpdateWithoutReferenceInput>
  }

  export type areaUpdateWithoutReferenceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    stake_id?: NullableIntFieldUpdateOperationsInput | number | null
    zone?: zoneUpdateOneRequiredWithoutAreaNestedInput
  }

  export type areaUncheckedUpdateWithoutReferenceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    zone_id?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    stake_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type areaCreateWithoutZoneInput = {
    id: number
    name: string
    is_active?: boolean
    stake_id?: number | null
    reference?: referenceCreateNestedManyWithoutAreaInput
  }

  export type areaUncheckedCreateWithoutZoneInput = {
    id: number
    name: string
    is_active?: boolean
    stake_id?: number | null
    reference?: referenceUncheckedCreateNestedManyWithoutAreaInput
  }

  export type areaCreateOrConnectWithoutZoneInput = {
    where: areaWhereUniqueInput
    create: XOR<areaCreateWithoutZoneInput, areaUncheckedCreateWithoutZoneInput>
  }

  export type areaCreateManyZoneInputEnvelope = {
    data: areaCreateManyZoneInput | areaCreateManyZoneInput[]
    skipDuplicates?: boolean
  }

  export type areaUpsertWithWhereUniqueWithoutZoneInput = {
    where: areaWhereUniqueInput
    update: XOR<areaUpdateWithoutZoneInput, areaUncheckedUpdateWithoutZoneInput>
    create: XOR<areaCreateWithoutZoneInput, areaUncheckedCreateWithoutZoneInput>
  }

  export type areaUpdateWithWhereUniqueWithoutZoneInput = {
    where: areaWhereUniqueInput
    data: XOR<areaUpdateWithoutZoneInput, areaUncheckedUpdateWithoutZoneInput>
  }

  export type areaUpdateManyWithWhereWithoutZoneInput = {
    where: areaScalarWhereInput
    data: XOR<areaUpdateManyMutationInput, areaUncheckedUpdateManyWithoutZoneInput>
  }

  export type areaScalarWhereInput = {
    AND?: areaScalarWhereInput | areaScalarWhereInput[]
    OR?: areaScalarWhereInput[]
    NOT?: areaScalarWhereInput | areaScalarWhereInput[]
    id?: IntFilter<"area"> | number
    name?: StringFilter<"area"> | string
    zone_id?: IntFilter<"area"> | number
    is_active?: BoolFilter<"area"> | boolean
    stake_id?: IntNullableFilter<"area"> | number | null
  }

  export type referenceCreateManyAreaInput = {
    id: string
    sent_date?: Date | string
    name: string
    other?: string | null
    who_sent: string
    offer?: string | null
    phone?: string | null
  }

  export type referenceUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    other?: NullableStringFieldUpdateOperationsInput | string | null
    who_sent?: StringFieldUpdateOperationsInput | string
    offer?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type referenceUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    other?: NullableStringFieldUpdateOperationsInput | string | null
    who_sent?: StringFieldUpdateOperationsInput | string
    offer?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type referenceUncheckedUpdateManyWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent_date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    other?: NullableStringFieldUpdateOperationsInput | string | null
    who_sent?: StringFieldUpdateOperationsInput | string
    offer?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type areaCreateManyZoneInput = {
    id: number
    name: string
    is_active?: boolean
    stake_id?: number | null
  }

  export type areaUpdateWithoutZoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    stake_id?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: referenceUpdateManyWithoutAreaNestedInput
  }

  export type areaUncheckedUpdateWithoutZoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    stake_id?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: referenceUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type areaUncheckedUpdateManyWithoutZoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    stake_id?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}