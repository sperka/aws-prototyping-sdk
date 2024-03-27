/*! Copyright [Amazon.com](http://amazon.com/), Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0 */
import { Component } from "projen";
import { Language } from "../../languages";
import { OpenApiModelOptions } from "../../types";
import { TypeSafeApiModelProjectBase } from "../type-safe-api-model-project-base";

/**
 * Options for the OpenAPI Spec
 */
export interface OpenApiProjectDefinitionOptions {
  /**
   * Options for the openapi model
   */
  readonly openApiOptions: OpenApiModelOptions;
  /**
   * The languages users have specified for handler projects (if any)
   */
  readonly handlerLanguages?: Language[];
}

/**
 * The OpenAPI Spec
 */
export class OpenApiProjectDefinition extends Component {
  /**
   * Path to the root OpenAPI specification file
   */
  public readonly openApiSpecificationPath: string =
    "src/main/openapi/main.yaml";

  constructor(
    project: TypeSafeApiModelProjectBase,
    _options: OpenApiProjectDefinitionOptions
  ) {
    super(project);
  }
}