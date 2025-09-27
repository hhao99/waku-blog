{
    description = "flake for react project development";

    inputs = {};

    outputs = inputs@ {nixpkgs,...}: 
    let
      eachSystem = f: nixpkgs.lib.genAttrs nixpkgs.lib.systems.flakeExposed (system: f nixpkgs.legacyPackages.${system});
    in
    {
        devShells = eachSystem (pkgs: {
            default = pkgs.mkShell {
                packages = with pkgs; [
                    nodejs_22
                    pnpm
                    bun 
                    nodePackages.typescript
                    nodePackages.typescript-language-server
                ];
            };
        });
    };
}